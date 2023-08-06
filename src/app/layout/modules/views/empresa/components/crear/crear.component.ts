import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmpresa } from '../../interfaces/IEmpresa';

@Component({
  selector: 'empresa-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit, OnChanges{
  @Input() tituloModal!: string;

  @Input() isVisible!: boolean;
  @Output() cerrarModal = new EventEmitter<boolean>();

  @Input() datoInterfazEdit!:IEmpresa[];
  public datoInterfaz!: IEmpresa;
  @Output() datoFormulario = new EventEmitter<IEmpresa>();

  public formularioEmpresa: FormGroup = this.fb.group({
    empresa_ruc: ['',[Validators.required, Validators.minLength(11)]],
    empresa_razon_social: ['', [Validators.required]],
    empresa_abreviatura: ['',Validators.required],
    empresa_inscripcion: ['',Validators.required],
    empresa_lugar_inscripcion: ['',Validators.required],
    empresa_mz: ['',Validators.required],
    empresa_telefono: ['',Validators.required],
    empresa_email: ['',Validators.required],
    empresa_partida_electronica: ['',Validators.required],
    empresa_fecha_incripcion: ['2021-06-01',Validators.required],
    empresa_nombre_via: [''],
    empresa_lote_interno: [''],
    empresa_nombre_urb: [''],
    empresa_url: [''],
    empresa_referencia: ['',Validators.required],
  });
  constructor(private fb: FormBuilder) {}
  

  ngOnInit(): void {
    // this.formularioInicial();
    console.log("ngOnInit()");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['datoInterfazEdit']){
      const empresaEditar:IEmpresa=changes['datoInterfazEdit'].currentValue;
      console.log("RUC:",empresaEditar);
      console.log("RAZON SOCIAL:",empresaEditar.emp_razon_social);
      // console.log("IF ONCHANGES");
      if(this.datoInterfazEdit.length!==0){
        console.log("NO ESTA VACIO EL ARREGLO datoInterfazEdit");
        console.log("RAZ SOC: ",this.datoInterfazEdit[0].emp_razon_social);
        this.datosEnEdicion();
      }else{
        console.log("ESTA VACIO");
        console.log("Empresa Editar: ",empresaEditar);
      }  
    }
    console.log("ngOnChanges()");
  }

  emisionNuevoValorModal(value: boolean) {
    this.cerrarModal.emit(value);
  }

  private datosEnEdicion():void{
    this.datoInterfaz={
      emp_partida_registral: 'x',
      emp_RUC: this.datoInterfazEdit[0].emp_RUC,
      emp_razon_social: this.datoInterfazEdit[0].emp_razon_social,
      emp_abreviatura: this.datoInterfazEdit[0].emp_abreviatura,
      emp_num_inscripcion_SUNARP: this.datoInterfazEdit[0].emp_num_inscripcion_SUNARP,
      emp_lug_inscripcion_SUNARP: this.datoInterfazEdit[0].emp_lug_inscripcion_SUNARP,
      emp_num_mz_km: this.datoInterfazEdit[0].emp_num_mz_km,
      emp_telefono: this.datoInterfazEdit[0].emp_telefono,
      emp_email: this.datoInterfazEdit[0].emp_email,
      emp_partida_electronica_SUNARP: this.datoInterfazEdit[0].emp_partida_electronica_SUNARP,
      emp_fec_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
      emp_nombre_via: this.datoInterfazEdit[0].emp_nombre_via,
      emp_lote_int: this.datoInterfazEdit[0].emp_lote_int,
      emp_nom_urba: this.datoInterfazEdit[0].emp_nom_urba,
      emp_URL: this.datoInterfazEdit[0].emp_URL,
      emp_referencia: this.datoInterfazEdit[0].emp_referencia,
      emp_estado: '1',
      servicio_id: 1,
      tipo_servicio_id:1
  }
  }
  //
  //
  //
  private validarContenidoFormulario():void{
    // if(changes['datoInterfazEdit'].previousValue===0){
    //   console.log("NO HAY CAMBIOS EN EL EDITAR");
    // }else{
    //   console.log("SI HAY CAMBIOS EN EL EDITAR");
    // }
    console.log("************");
    console.log("CREAR:",this.datoInterfazEdit);
    console.log("************");
    if(this.datoInterfazEdit.length===0){//VERIDICO SI EL ARREGLO DE EDITAR TIENE DATOS
      //AQUI SE GUARDARA UNA NUEVA EMPRESA PORQUE NO HAY ID
      this.datoInterfaz={
        emp_partida_registral: 'x',
        emp_RUC: this.formularioEmpresa.controls['empresa_ruc'].value,
        emp_razon_social: this.formularioEmpresa.controls['empresa_razon_social'].value,
        emp_abreviatura: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_num_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_lug_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_num_mz_km: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_telefono: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_email: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_partida_electronica_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_fec_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
        emp_nombre_via: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_lote_int: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_nom_urba: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_URL: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_referencia: this.formularioEmpresa.controls['empresa_abreviatura'].value,
        emp_estado: '1',
        servicio_id: 1,
        tipo_servicio_id:1
      }
    }else{
      //AL HABER ID SE CARGADAR LOS DATOS Y SE DARA A EDITAR
      this.datoInterfaz={
        emp_partida_registral: 'x',
        emp_RUC: this.datoInterfazEdit[0].emp_RUC,
        emp_razon_social: this.datoInterfazEdit[0].emp_razon_social,
        emp_abreviatura: this.datoInterfazEdit[0].emp_abreviatura,
        emp_num_inscripcion_SUNARP: this.datoInterfazEdit[0].emp_num_inscripcion_SUNARP,
        emp_lug_inscripcion_SUNARP: this.datoInterfazEdit[0].emp_lug_inscripcion_SUNARP,
        emp_num_mz_km: this.datoInterfazEdit[0].emp_num_mz_km,
        emp_telefono: this.datoInterfazEdit[0].emp_telefono,
        emp_email: this.datoInterfazEdit[0].emp_email,
        emp_partida_electronica_SUNARP: this.datoInterfazEdit[0].emp_partida_electronica_SUNARP,
        emp_fec_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
        emp_nombre_via: this.datoInterfazEdit[0].emp_nombre_via,
        emp_lote_int: this.datoInterfazEdit[0].emp_lote_int,
        emp_nom_urba: this.datoInterfazEdit[0].emp_nom_urba,
        emp_URL: this.datoInterfazEdit[0].emp_URL,
        emp_referencia: this.datoInterfazEdit[0].emp_referencia,
        emp_estado: '1',
        servicio_id: 1,
        tipo_servicio_id:1
    }
      // console.log("ID epara edit: ", this.datoInterfazEdit[0].emp_RUC);
    
  }
}
  // private formularioInicial():void{
  //   this.formularioEmpresa = this.fb.group({
  //     empresa_ruc: ['',[Validators.required, Validators.minLength(11)]],
  //     empresa_razon_social: ['', [Validators.required]],
  //     empresa_abreviatura: ['',Validators.required],
  //     empresa_inscripcion: ['',Validators.required],
  //     empresa_lugar_inscripcion: ['',Validators.required],
  //     empresa_mz: ['',Validators.required],
  //     empresa_telefono: ['',Validators.required],
  //     empresa_email: ['',Validators.required],
  //     empresa_partida_electronica: ['',Validators.required],
  //     empresa_fecha_incripcion: ['',Validators.required],
  //     empresa_nombre_via: [''],
  //     empresa_lote_interno: [''],
  //     empresa_nombre_urb: [''],
  //     empresa_url: [''],
  //     empresa_referencia: ['',Validators.required],
  //   });
  // }

  guardarFormulario(): void {
    if (this.formularioEmpresa.invalid) {
      this.formularioEmpresa.markAllAsTouched();
      console.log('Formulario Invalido')
      return;
    }
    // if(this.datoInterfazEdit===null){//VERIFICO SI HAY UN ID AL EDITAR
    //   //AQUI SE GUARDARA UNA NUEVA EMPRESA PORQUE NO HAY ID
    //   this.datoInterfaz={
    //     emp_partida_registral: 'x',
    //     emp_RUC: this.formularioEmpresa.controls['empresa_ruc'].value,
    //     emp_razon_social: this.formularioEmpresa.controls['empresa_razon_social'].value,
    //     emp_abreviatura: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_num_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_lug_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_num_mz_km: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_telefono: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_email: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_partida_electronica_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_fec_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
    //     emp_nombre_via: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_lote_int: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_nom_urba: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_URL: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_referencia: this.formularioEmpresa.controls['empresa_abreviatura'].value,
    //     emp_estado: '1',
    //     servicio_id: 1,
    //     tipo_servicio_id:1
    //   }
    // }else{
    //   //AL HABER ID SE CARGADAR LOS DATOS Y SE DARA A EDITAR
    //   this.datoInterfaz={
    //     emp_partida_registral: 'x',
    //     emp_RUC: this.datoInterfazEdit[0].emp_RUC,
    //     emp_razon_social: this.datoInterfazEdit[0].emp_razon_social,
    //     emp_abreviatura: this.datoInterfazEdit[0].emp_abreviatura,
    //     emp_num_inscripcion_SUNARP: this.datoInterfazEdit[0].emp_num_inscripcion_SUNARP,
    //     emp_lug_inscripcion_SUNARP: this.datoInterfazEdit[0].emp_lug_inscripcion_SUNARP,
    //     emp_num_mz_km: this.datoInterfazEdit[0].emp_num_mz_km,
    //     emp_telefono: this.datoInterfazEdit[0].emp_telefono,
    //     emp_email: this.datoInterfazEdit[0].emp_email,
    //     emp_partida_electronica_SUNARP: this.datoInterfazEdit[0].emp_partida_electronica_SUNARP,
    //     emp_fec_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
    //     emp_nombre_via: this.datoInterfazEdit[0].emp_nombre_via,
    //     emp_lote_int: this.datoInterfazEdit[0].emp_lote_int,
    //     emp_nom_urba: this.datoInterfazEdit[0].emp_nom_urba,
    //     emp_URL: this.datoInterfazEdit[0].emp_URL,
    //     emp_referencia: this.datoInterfazEdit[0].emp_referencia,
    //     emp_estado: '1',
    //     servicio_id: 1,
    //     tipo_servicio_id:1
    //   }
    // }
    
    this.datoInterfaz={
          emp_partida_registral: 'x',
          emp_RUC: this.formularioEmpresa.controls['empresa_ruc'].value,
          emp_razon_social: this.formularioEmpresa.controls['empresa_razon_social'].value,
          emp_abreviatura: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_num_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_lug_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_num_mz_km: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_telefono: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_email: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_partida_electronica_SUNARP: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_fec_inscripcion_SUNARP: this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
          emp_nombre_via: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_lote_int: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_nom_urba: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_URL: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_referencia: this.formularioEmpresa.controls['empresa_abreviatura'].value,
          emp_estado: '1',
          servicio_id: 1,
          tipo_servicio_id:1
        }
    this.datoFormulario.emit(this.datoInterfaz);
    console.log(this.datoInterfaz);
    this.emisionNuevoValorModal(false);
  }

}
