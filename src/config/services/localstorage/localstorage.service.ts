export const getUUID = () => {
  return localStorage.getItem("uuid");
};

export const setUUID = (uuid: string) => {
  localStorage.setItem("uuid", uuid);
};

export const removeUUID = () => {
  localStorage.removeItem("uuid");
};

export default {
  getUUID,
  setUUID,
  removeUUID,
};
