interface CommonResponse {
  error: boolean;
  mensaje: string;
}

export interface GetUUIDResponse extends CommonResponse {
  data: {
    uuid: string;
  };
}
