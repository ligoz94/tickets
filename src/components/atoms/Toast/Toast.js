import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Config
toast.configure({
  autoClose: 3000,
  draggable: true,
  hideProgressBar: true,
});

// Ui toast
const onNotification = (message, icon, type) => {
  return toast(
    <div className="notification-item">
      <span className="icon">{icon}</span>
      <span className="message">{message}</span>
    </div>,
    {
      position: toast.POSITION.BOTTOM_LEFT,
      className: `notification-${type}`,
    }
  );
};

// Notification
export const notify = (message, type) => {
  if (type === "success") {
    return onNotification(message);
  } else if (type === "warning") {
    return onNotification(message);
  } else {
    return toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export default { notify };
