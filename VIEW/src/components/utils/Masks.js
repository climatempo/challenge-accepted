import { maskJs } from 'mask-js';
import { isObservable, toJS } from 'mobx';
import moment from 'moment';
import TeamUtils from '../team/TeamUtils';

class Masks {
  /**
   * Remove o tipo Proxy do objeto observável pela Store
   * Necessário para manipular os dados sem a interferencia do Proxy
   */
  removeObserver = value => (isObservable(value) ? toJS(value) : value);

  onlyDigits = (value, qtdDigits) => {
    value = this.removeObserver(value);
    return maskJs('9'.repeat(qtdDigits), value);
  };

  date = (value, location, time = true, weekday = false) => {
    value = this.removeObserver(value);

    let format = location === 'BR' ? 'DD/MM/YYYY' : 'MM/DD/YYYY';
    format += time ? ' HH:mm' : '';

    let date = moment.utc(value);

    return weekday ? date.format(format) + ' ' + TeamUtils.dayOfWeek(date.day(), location) : date.format(format);
  };

  unmaskCurrency = value => {
    return value
      .toString()
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.');
  };

  currency = (value, location, maxLength = 10) => {
    value = this.removeObserver(value);

    if (value && value.toString().match(/^[0-9.]*$/g)) value = Number(value / 100).toFixed(2);

    value = value ? this.onlyDigits(value.toString(), maxLength) : 0;
    value = String(Number(value));
    let len = value.length;

    let separator = location == 'BR' ? '.' : ',';
    let decimalSeparator = location == 'BR' ? ',' : '.';
    let cifra = location == 'BR' ? 'R$ ' : location == 'US' ? 'U$ ' : 'R ';

    if (1 === len) value = value.replace(/(\d)/, '0' + decimalSeparator + '0$1');
    else if (2 === len) value = value.replace(/(\d)/, '0' + decimalSeparator + '$1');
    else if (len > 2) {
      value = value.replace(/(\d{2})$/, decimalSeparator + '$1').replace(/(\d)(?=(\d{3})+,)/g, '$1' + separator);
    }
    return cifra + value;
  };

  cnpj = value => {
    value = value ? this.onlyDigits(value.toString(), 14) : '';
    return value
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  };
}

export default new Masks();
