import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo:string="";

  constructor() { }

  public isVisibleModal:boolean=false

  ngOnInit(): void {
  }

  public abrirModal():void{
    this.isVisibleModal=true;    
    this.titulo="Adicionar una Nueva Empresa"
  }
  public recepcionCloseModal(valorModalRecibido:boolean):void{
    this.isVisibleModal=valorModalRecibido;
    console.log(this.isVisibleModal);
  }

}
