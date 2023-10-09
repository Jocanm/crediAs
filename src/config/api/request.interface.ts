export interface ValidateAmountBody {
  monto: number;
  cuotas: number;
}

export interface SendCustomerInfoBody {
  uuid: string;
  monto: number;
  cuotas: number;
  nombres: string;
  apellidos: string;
  tipo_doc: string;
  doc: string;
  fecha_nacimiento: string;
  fecha_expedicion: string;
  celular: string;
  email: string;
}
