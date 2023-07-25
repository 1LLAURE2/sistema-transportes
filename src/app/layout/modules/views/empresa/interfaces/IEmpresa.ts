import { IAutorizacion } from "../../autorizacion/interfaces/IAutorizacion";
import { IRepresentante } from "../../representante-legal/interfaces/IRepresentante";
import { IServicio } from "../../servicio/interfaces/IServicio";
import { ITipoServicio } from "../../tipo-servicio/interfaces/ITipoServicio";

export interface IEmpresa {
  id?:number;
  emp_partida_registral: string
  emp_RUC: string
  emp_razon_social: string
  emp_abreviatura: string
  emp_num_inscripcion_SUNARP: string
  emp_lug_inscripcion_SUNARP: string
  emp_num_mz_km: string
  emp_telefono: string
  emp_email: string
  emp_partida_electronica_SUNARP: string
  emp_fec_inscripcion_SUNARP: string
  emp_nombre_via: string
  emp_lote_int: string
  emp_nom_urba: string
  emp_URL: string
  emp_referencia: string
  emp_estado: string
  servicio: IServicio[]
  tipo_servicio: ITipoServicio[]
  representante: IRepresentante[]
  autorizacion: IAutorizacion[]
  //
  Estado_Empresa:string
}
