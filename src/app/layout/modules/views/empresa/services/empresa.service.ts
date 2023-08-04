import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmpresa } from '../interfaces/IEmpresa';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  getEmpresa():Observable<any>{
    const uri=`${environment.apiUrl}/empresa`;
    return this.http.get<any>(uri);
  }

  postEmpresa(empresa:IEmpresa):Observable<IEmpresa>{
    const uri=`${environment.apiUrl}/empresa`;
    // const body={
    //   emp_partida_registral: empresa.emp_partida_registral,
    //   emp_RUC: empresa.emp_RUC,
    //   emp_razon_social: empresa.emp_razon_social,
    //   emp_abreviatura: empresa.emp_abreviatura,
    //   emp_num_inscripcion_SUNARP: empresa.emp_num_inscripcion_SUNARP,
    //   emp_lug_inscripcion_SUNARP: empresa.emp_lug_inscripcion_SUNARP,
    //   emp_num_mz_km: empresa.emp_num_mz_km,
    //   emp_telefono: empresa.emp_telefono,
    //   emp_email: empresa.emp_email,
    //   emp_partida_electronica_SUNARP: empresa.emp_partida_electronica_SUNARP,
    //   emp_fec_inscripcion_SUNARP: empresa.emp_fec_inscripcion_SUNARP,
    //   emp_nombre_via: empresa.emp_nombre_via,
    //   emp_lote_int: empresa.emp_lote_int,
    //   emp_nom_urba: empresa.emp_nom_urba,
    //   emp_URL: empresa.emp_URL,
    //   emp_referencia: empresa.emp_referencia,
    //   emp_estado: empresa.emp_estado,
    //   servicio_id: empresa.servicio_id,
    //   tipo_servicio_id: empresa.tipo_servicio_id
    // }
    return this.http.post<IEmpresa>(uri,empresa);
  }

  deleteEmpresa(id:number):Observable<IEmpresa>{
    const uri=`${environment.apiUrl}/empresa/${id}`;
    return this.http.delete<IEmpresa>(uri);
  }

  showEmpresa(id:number):Observable<IEmpresa>{
    const uri=`${environment.apiUrl}/empresa/${id}`;
    return this.http.get<IEmpresa>(uri);
  }

  updateEmpresa(id:number,empresa:IEmpresa):Observable<IEmpresa>{
    const uri=`${environment.apiUrl}/empresa/${id}`;
    return this.http.put<IEmpresa>(uri,empresa)
  }
}
