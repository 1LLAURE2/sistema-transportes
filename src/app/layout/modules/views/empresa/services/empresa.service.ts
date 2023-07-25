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
