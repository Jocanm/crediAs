import { type InitialInfo } from "@/modules/loan-info/components/loan-form/LoanForm";

export const getUUID = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("uuid");
};

export const setUUID = (uuid: string) => {
  localStorage.setItem("uuid", uuid);
};

export const removeUUID = () => {
  localStorage.removeItem("uuid");
};

export const getInitialInfo = () => {
  if (typeof window === "undefined") return null;

  const initialInfo = localStorage.getItem("initialInfo");
  if (!initialInfo) return null;

  return JSON.parse(initialInfo) as InitialInfo;
};

export const removeInitialInfo = () => {
  localStorage.removeItem("initialInfo");
};

export default {
  getUUID,
  setUUID,
  removeUUID,
  getInitialInfo,
  removeInitialInfo,
};
