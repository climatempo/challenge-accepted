/* eslint no-nested-ternary: "off" */
import React from 'react';
import { notification } from 'antd';

import {
  FaTimes,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';

const Notification = (type, title, text) => {
  let icon;
  if (type === 'success') {
    icon = <FaCheckCircle style={{ color: '#27ae60' }} />;
  } else if (type === 'warning') {
    icon = <FaExclamationTriangle style={{ color: '#f9ca24' }} />;
  } else if (type === 'info') {
    icon = <FaInfoCircle style={{ color: '#0984e3' }} />;
  } else {
    icon = <FaTimesCircle style={{ color: '#c0392b' }} />;
  }
  return notification[type]({
    rtl: true,
    placement: 'topRight',
    message: title,
    duration: 3,
    top: 100,
    description: text,
    closeIcon: <FaTimes />,
    icon,
  });
};

export default Notification;
