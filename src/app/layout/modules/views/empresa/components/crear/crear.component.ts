import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmpresa } from '../../interfaces/IEmpresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'empresa-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  @Input() tituloModal!: string;

  @Input() isVisible!: boolean;
  @Output() cerrarModal = new EventEmitter<boolean>();

  public datoInterfaz!: IEmpresa;
  @Output() datoFormulario = new EventEmitter<IEmpresa>();

  public formularioEmpresa: FormGroup = this.fb.group({
    empresa_ruc: ['10701642142',[Validators.required, Validators.minLength(11)]],
    empresa_razon_social: ['RAMIRO PRIALE', [Validators.required]],
    empresa_abreviatura: ['RAM PRI',Validators.required],
    empresa_inscripcion: ['111',Validators.required],
    empresa_lugar_inscripcion: ['AV. PERU',Validators.required],
    empresa_mz: ['-',Validators.required],
    empresa_telefono: ['044-786523',Validators.required],
    empresa_email: ['-',Validators.required],
    empresa_partida_electronica: ['P111',Validators.required],
    empresa_fecha_incripcion: ['2021-06-01',Validators.required],
    empresa_nombre_via: ['SAN FELIPE'],
    empresa_lote_interno: ['-'],
    empresa_nombre_urb: ['-'],
    empresa_url: ['www.google.com'],
    empresa_referencia: ['FRENTE A LA FERRETERIA SIFUENTES',Validators.required],
  });
  constructor(private fb: FormBuilder,private empresaServicio:EmpresaService) {}

  ngOnInit(): void {}

  emisionNuevoValorModal(value: boolean) {
    this.cerrarModal.emit(value);
  }
  //
  //
  //
  guardarFormulario(): void {
    if (this.formularioEmpresa.invalid) {
      this.formularioEmpresa.markAllAsTouched();
      console.log('Formulario Invalido')
      return;
    }
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
      },

    this.datoFormulario.emit(this.datoInterfaz);
    console.log(this.datoInterfaz);
    this.emisionNuevoValorModal(false);
  }

}
