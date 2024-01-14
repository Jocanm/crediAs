import { type GetLoanResumeBody } from "./request.interface";

export interface CommonResponse {
  error: boolean;
  mensaje: string;
}

export interface GetUUIDResponse extends CommonResponse {
  data: {
    uuid: string;
  };
}

export interface ValidateAmountResponse extends CommonResponse {}

export interface GetLoanResumeApiResponse {
  amortizaK: number;
  aval: number;
  capital: number;
  cuotar: number;
  est_credito: number;
  interes: number;
  nrocuota: number;
  plat_tecno: number;
  seguro: number;
  t_cuota: number;
  tasa: number;
}

export interface GetLoanResumeResponse {
  info: GetLoanResumeBody;
  data: GetLoanResumeApiResponse[];
}
