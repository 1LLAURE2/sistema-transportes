import { Component, Input, OnInit } from '@angular/core';
import { IEmpresa } from '../../interfaces/IEmpresa';
import { EmpresaService } from '../../services/empresa.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface IRespuesta {
  code: number;
  success: boolean;
  message: string;
  data: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() cabeceraModal: string = 'NO HAY NADA AUN';
  @Input() isVisibleModal!: boolean;

  listado_de_Empresas: IEmpresa[] = [];
  // mostrarEmpresa:IEmpresa[]=[];
  nuevaEmpresa!: IEmpresa;

  constructor(private empresaServicio: EmpresaService) {}

  ngOnInit(): void {
    this.listarEmpresa();
  }

  public recepcionCloseModal(valorModalRecibido: boolean): void {
    this.isVisibleModal = valorModalRecibido;
    console.log(this.isVisibleModal);
  }

  public recepcionNuevaEmpresa(newEmpresa: IEmpresa): void {
    this.nuevaEmpresa = newEmpresa;
    console.log(this.nuevaEmpresa);
    this.registrarEmpresa(this.nuevaEmpresa);
  }

  public recibirTitulo(text: string): void {
    this.cabeceraModal = text;
    console.log(this.cabeceraModal);
  }
  public recibirEstadoModal(estado: boolean): void {
    this.isVisibleModal = estado;
    console.log(this.isVisibleModal);
  }

  //METODO GET DESDE EL SERVICIO
  private listarEmpresa(): void {
    this.listado_de_Empresas = [];
    this.empresaServicio.getEmpresa().subscribe({
      next: (respuesta: IRespuesta) => {
        respuesta.data.forEach((empresa: IEmpresa) => {
          // console.log(empresa);
          this.listado_de_Empresas.push({
            ...empresa,
            // TODO: ? LO IGUALO A "1" PORQUE SI FUERA BOOLEAN NO DEBERIA TENER
            Estado_Empresa: empresa.emp_estado == '1' ? 'ACTIVO' : 'INACTIVO',
            // areaEstado:area.are_estado?'ACTIVO':'INACTIVO'
          });
        }); //;
      },
      error: (respuestaError: HttpErrorResponse) => {
        const respuesta: IRespuesta = { ...respuestaError.error };
        const codigoHttp: number = respuestaError.status;
        if (codigoHttp != 0) {
          console.log(respuesta.message);
        } else {
          console.log('Error en el Servidor - Listado de empresas');
        }
      },
    });
  }

  //METODO POST DESDE EL SERVICIO
  private registrarEmpresa(empresa: IEmpresa): void {
    this.empresaServicio.postEmpresa(empresa).subscribe({
      next(respuesta: IEmpresa) {
        console.log('VALOR NEXTT: ', respuesta);
      },
      error(respuestaError: HttpErrorResponse) {
        console.log('Error:', respuestaError.message);
      },
    });
  }
}
