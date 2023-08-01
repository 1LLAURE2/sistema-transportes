import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'empresa-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  @Input() tituloModal!:string;

  @Input() isVisible!: boolean;
  @Output() cerrarModal=new EventEmitter<boolean>();

  public formularioEmpresa:FormGroup=this.fb.group({
    empresa_ruc:['',[Validators.required,Validators.minLength(11)]],
    empresa_razon_social:['raz',[Validators.required]],
    empresa_abreviatura:['ab'],
    empresa_inscripcion:[''],
    empresa_lugar_inscripcion:[''],
    empresa_mz:[''],
    empresa_telefono:[''],
    empresa_email:[''],
    empresa_partida_electronica:[''],
    empresa_fecha_incripcion:[''],
    empresa_nombre_via:[''],
    empresa_lote_interno:[''],
    empresa_nombre_urb:[''],
    empresa_url:[''],
    empresa_referencia:[''],


  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  emisionNuevoValorModal(value: boolean) {
    this.cerrarModal.emit(value);
  }
  // 
  // 
  // 
  guardarFormulario():void{
    if(this.formularioEmpresa.invalid){
      this.formularioEmpresa.markAllAsTouched();
      return
    };
    console.log(this.formularioEmpresa.value);
  }
}
