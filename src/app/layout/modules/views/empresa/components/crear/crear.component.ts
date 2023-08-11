import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmpresa } from '../../interfaces/IEmpresa';
import { ICrearActualizarEmpresa } from '../../interfaces/ICrearActualizarEmpresa';

@Component({
  selector: 'empresa-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit, OnChanges {
  //?TENDRE QUE PASAR POR INPUT EL VALOR DE SI ES REGISTRO O ACTUALIZAT
  @Input() tituloModal!: string;
  @Input() isVisible!: boolean;
  @Output() cerrarModal = new EventEmitter<boolean>();

  @Input() empresaUtilizadaModal!: IEmpresa;
  @Input() esRegistro!: boolean;
  @Output() CrearActualizarEmpresa =new EventEmitter<ICrearActualizarEmpresa>();

  public formularioEmpresa: FormGroup = this.fb.group({
    empresa_ruc: ['',[Validators.required, Validators.maxLength(11), Validators.minLength(11)],],
    empresa_razon_social: ['', [Validators.required]],
    empresa_abreviatura: ['', Validators.required],
    empresa_inscripcion: ['', Validators.required],
    empresa_lugar_inscripcion: ['', Validators.required],
    empresa_mz: ['', Validators.required],
    empresa_telefono: ['', Validators.required],
    empresa_email: ['', Validators.required],
    empresa_partida_electronica: ['', Validators.required],
    empresa_fecha_incripcion: ['2021-06-01', Validators.required],
    empresa_nombre_via: [''],
    empresa_lote_interno: [''],
    empresa_nombre_urb: [''],
    empresa_url: [''],
    empresa_referencia: ['', Validators.required],
    empresa_servicio: [''],
    empresa_tipo_servicio: [''],
  });

  constructor(private fb: FormBuilder) {}

  get empresa_ruc() {
    return this.formularioEmpresa.get('empresa_ruc');
  }
  get empresa_razon_social() {
    return this.formularioEmpresa.get('empresa_razon_social');
  }

  get empresa_abreviatura() {
    return this.formularioEmpresa.get('empresa_abreviatura');
  }

  get empresa_inscripcion() {
    return this.formularioEmpresa.get('empresa_inscripcion');
  }

  get empresa_lugar_inscripcion() {
    return this.formularioEmpresa.get('empresa_lugar_inscripcion');
  }

  get empresa_mz() {
    return this.formularioEmpresa.get('empresa_mz');
  }

  get empresa_telefono() {
    return this.formularioEmpresa.get('empresa_telefono');
  }

  get empresa_email() {
    return this.formularioEmpresa.get('empresa_email');
  }

  get empresa_partida_electronica() {
    return this.formularioEmpresa.get('empresa_partida_electronica');
  }

  get empresa_fecha_incripcion() {
    return this.formularioEmpresa.get('empresa_fecha_incripcion');
  }

  get empresa_nombre_via() {
    return this.formularioEmpresa.get('empresa_nombre_via');
  }

  get empresa_lote_interno() {
    return this.formularioEmpresa.get('empresa_lote_interno');
  }

  get empresa_nombre_urb() {
    return this.formularioEmpresa.get('empresa_nombre_urb');
  }

  get empresa_url() {
    return this.formularioEmpresa.get('empresa_url');
  }

  get empresa_referencia() {
    return this.formularioEmpresa.get('empresa_referencia');
  }

  get empresa_servicio() {
    return this.formularioEmpresa.get('empresa_servicio');
  }

  get empresa_tipo_servicio() {
    return this.formularioEmpresa.get('empresa_tipo_servicio');
  }

  ngOnInit(): void {
    // this.limpiarFormulario();
    console.log('ngOnInit()');
  }

  llenarDatosActualizar(empresa: IEmpresa): void {
    this.formularioEmpresa.reset({
      empresa_ruc: empresa?.emp_RUC,
      empresa_razon_social: empresa?.emp_razon_social,
      empresa_abreviatura: empresa?.emp_abreviatura,
      empresa_inscripcion: empresa?.emp_num_inscripcion_SUNARP,
      empresa_lugar_inscripcion: empresa?.emp_lug_inscripcion_SUNARP,
      empresa_mz: empresa?.emp_num_mz_km,
      empresa_telefono: empresa?.emp_telefono,
      empresa_email: empresa?.emp_email,
      empresa_partida_electronica: empresa?.emp_partida_electronica_SUNARP,
      empresa_fecha_incripcion: empresa?.emp_fec_inscripcion_SUNARP,
      empresa_nombre_via: empresa?.emp_nombre_via,
      empresa_lote_interno: empresa?.emp_lote_int,
      empresa_nombre_urb: empresa?.emp_nom_urba,
      empresa_url: empresa?.emp_URL,
      empresa_referencia: empresa?.emp_referencia,
      empresa_servicio: empresa?.servicio_id,
      empresa_tipo_servicio: empresa?.tipo_servicio_id,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empresaUtilizadaModal']) {
      const empresa: IEmpresa = changes['empresaUtilizadaModal'].currentValue;
      this.llenarDatosActualizar(empresa);
    }
  }

  private limpiarFormulario(): void {
    this.formularioEmpresa.reset();
  }
  emisionNuevoValorModal(value: boolean) {
    // this.limpiarFormulario();
    this.cerrarModal.emit(value);
  }

  enviarDatosDelFormulario(): void {
    if (this.formularioEmpresa.invalid) {
      this.formularioEmpresa.markAllAsTouched();
      console.log('Formulario Invalido');
      return;
    }
    const empresa: IEmpresa = {
      id: this.empresaUtilizadaModal?.id,
      emp_partida_registral: '01',
      emp_RUC: this.formularioEmpresa.controls['empresa_ruc'].value,
      emp_razon_social:this.formularioEmpresa.controls['empresa_razon_social'].value,
      emp_abreviatura:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_num_inscripcion_SUNARP:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_lug_inscripcion_SUNARP:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_num_mz_km:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_telefono:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_email: this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_partida_electronica_SUNARP:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_fec_inscripcion_SUNARP:this.formularioEmpresa.controls['empresa_fecha_incripcion'].value,
      emp_nombre_via:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_lote_int:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_nom_urba:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_URL: this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_referencia:this.formularioEmpresa.controls['empresa_abreviatura'].value,
      emp_estado: '1',
      servicio_id: 1,
      tipo_servicio_id: 1,
    };
    console.log('dato:', empresa);
    this.enviarInformacionEmpresa(empresa);
    this.emisionNuevoValorModal(false);
    this.limpiarFormulario();
  }

  private enviarInformacionEmpresa(empresa: IEmpresa) {
    const data: ICrearActualizarEmpresa = {
      isRegistro: this.esRegistro,
      empresa: { ...empresa },
    };
    this.CrearActualizarEmpresa.emit(data);
  }
} //nn
