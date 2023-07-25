import { Component, OnInit} from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { IEmpresa } from '../../interfaces/IEmpresa';
import { HttpErrorResponse } from '@angular/common/http';

export interface IRespuesta {
  code: number,
  success: boolean,
  message: string,
  data: any
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //* VARIABLES
  listado_de_Empresas:IEmpresa[]=[];

  constructor(private empresaServicio:EmpresaService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ngOnInit');
    this.listarEmpresa();
    console.log('Fin ngOnInit');
  }

  private listarEmpresa(){
    this.listado_de_Empresas=[];
    this.empresaServicio.getEmpresa().subscribe({
      next:(respuesta:IRespuesta)=>{
        (respuesta.data).forEach((empresa:IEmpresa) => {
          console.log(empresa);
          this.listado_de_Empresas.push({
            ...empresa,
            // TODO: ? LO IGUALO A "1" PORQUE SI FUERA BOOLEAN NO DEBERIA TENER
            Estado_Empresa:empresa.emp_estado=='1'?'ACTIVO':'INACTIVO'
            // areaEstado:area.are_estado?'ACTIVO':'INACTIVO'
            
          })
        }) //;
      },
      error:(respuestaError:HttpErrorResponse)=>{
        const respuesta:IRespuesta={...respuestaError.error};
        const codigoHttp:number=respuestaError.status;
        if(codigoHttp!=0){
          console.log(respuesta.message);
        }else{
          console.log('Error en el Servidor - Listado de empresas');
        }
      }
    });
  }

  mostrar(){
    console.log("Mostrar");
  }

  editar(){
    console.log("Editar");
  }

  eliminar(idEmpresa:number){
    //TODO: PARA ELIMINAR PREVIAMENTO DEBO INGRESAR DOCUMENTO
    this.empresaServicio.deleteEmpresa(idEmpresa).subscribe({
      next:(respuesta)=>{
        console.log(respuesta);
      },
      error:(error)=>{
        console.log(error.message);
      }
    });
  }
}
