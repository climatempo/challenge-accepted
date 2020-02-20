import { notification } from 'antd';

class AppUtils {
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
}

const Utils = new AppUtils();
export default Utils;
