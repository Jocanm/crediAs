import { type InitialInfo } from "@/modules/loan-info/components/loan-form/LoanForm";

export enum LocalStorageKeys {
  UUID = "uuid",
  INITIAL_INFO = "initialInfo",
}

export const getUUID = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(LocalStorageKeys.UUID);
};

export const setUUID = (uuid: string) => {
  localStorage.setItem(LocalStorageKeys.UUID, uuid);
};

export const removeUUID = () => {
  localStorage.removeItem(LocalStorageKeys.UUID);
};

export const setInitialInfo = (initialInfo: InitialInfo) => {
  localStorage.setItem(
    LocalStorageKeys.INITIAL_INFO,
    JSON.stringify(initialInfo),
  );
};

export const getInitialInfo = () => {
  if (typeof window === "undefined") return null;

  const initialInfo = localStorage.getItem(LocalStorageKeys.INITIAL_INFO);
  if (!initialInfo) return null;

  return JSON.parse(initialInfo) as InitialInfo;
};

export const removeInitialInfo = () => {
  localStorage.removeItem(LocalStorageKeys.INITIAL_INFO);
};

export default {
  getUUID,
  setUUID,
  removeUUID,
  setInitialInfo,
  getInitialInfo,
  removeInitialInfo,
};
