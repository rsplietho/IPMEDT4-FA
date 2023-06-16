import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Alert = ({ message, type }) => {
  switch (type) {
    case 'warning':
      toast.error(message);
      break;
    case 'success':
      toast.success(message);
      break;
    default:
      toast.info(message);
  }
};

export default Alert;
