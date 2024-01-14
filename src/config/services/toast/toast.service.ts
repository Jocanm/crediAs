import { toast, type ToastContent } from "react-toastify";

type ToastType = "success" | "error" | "warning";

export const generateToast = (type: ToastType, message: ToastContent) => {
  toast[type](message);
};

export const clearToast = () => {
  toast.dismiss();
};

export default {
  clearToast,
  generateToast,
};
