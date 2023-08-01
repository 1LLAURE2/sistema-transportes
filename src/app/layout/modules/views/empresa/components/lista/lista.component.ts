import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  selector: 'empresa-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  //* VARIABLES
  listado_de_Empresas:IEmpresa[]=[];
  @Output() tituloLista=new EventEmitter<string>();
  @Output() estadoModal=new EventEmitter<boolean>();

  constructor(private empresaServicio:EmpresaService){}
  ngOnInit(): void {
    this.listarEmpresa();
    this.estadoModal.emit(false);
  }
  
  
  private listarEmpresa():void{
    this.listado_de_Empresas=[];
    this.empresaServicio.getEmpresa().subscribe({
      next:(respuesta:IRespuesta)=>{
        (respuesta.data).forEach((empresa:IEmpresa) => {
          // console.log(empresa);
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

  aperturar_modal(){
    this.estadoModal.emit(true);
  }

  mostrar(idEmpresa:number){
    // this.aperturar_modal("Mostrar Empresa");
    this.aperturar_modal()
    this.tituloLista.emit("MOSTRAR");
    console.log("MOSTRAR ID: ",idEmpresa)
  }

  editar(idEmpresa:number){
    // this.aperturar_modal("Editar Empresa");
    this.aperturar_modal()
    this.tituloLista.emit("EDITAR");
    console.log("EDITAR ID: ",idEmpresa)
  }
  nuevo(){
    this.aperturar_modal()
    this.tituloLista.emit("NUEVO");
  }

  eliminar(idEmpresa:number){
    //TODO: PARA ELIMINAR PREVIAMENTO DEBO INGRESAR DOCUMENTO
    //!PRIMERO UN MODAL ESPECIFICO PARA ELIMINAR 
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
