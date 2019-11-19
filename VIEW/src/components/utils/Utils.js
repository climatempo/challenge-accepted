import { notification } from 'antd';
import moment from 'moment';

class AppUtils {
  getCssVariable = name => {
    return name ? getComputedStyle(document.documentElement).getPropertyValue('--' + name.toLowerCase()) : '';
  };

  showErrorMessage = message => {
    notification.error({
      message: 'Oops!!',
      description: message,
      className: 'ant-alert-error'
    });
  };

  showSucessMessage = message => {
    notification.success({
      message: 'Sucesso!!',
      description: message,
      className: 'ant-alert-success'
    });
  };

  getCountryMask = (country, type) => {
    let masks = {
      phone: {
        BR: '(11) 1 1111-1111',
        US: '(111) 111-1111',
        ZA: '(11) 111-1111'
      },
      cnpj: {
        BR: '11.111.111/1111-11',
        US: '11-1111111',
        ZA: '11-1111111'
      }
    };

    return masks[type][country];
  };
}

const Utils = new AppUtils();
export default Utils;
