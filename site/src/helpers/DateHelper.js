export class DateHelper {
  /**
   * Converts a string date (2017-02-01) for 'slacsh' string dates (01/02/2017)
   * @param {string} stringDate
   */
  static convertDate(stringDate) {
    const splitedDate = stringDate.split('-');
    const backSlashSplit = splitedDate.join('/').split('/').reverse();

    return backSlashSplit.join('/');
  }
}
