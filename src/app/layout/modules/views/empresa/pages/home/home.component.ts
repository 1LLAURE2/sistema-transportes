import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() cabeceraModal:string="NO HAY NADA AUN";
  @Input() isVisibleModal!:boolean;
  
  constructor() { }


  ngOnInit(): void {
  }
  
  public recepcionCloseModal(valorModalRecibido:boolean):void{
    this.isVisibleModal=valorModalRecibido;
    console.log(this.isVisibleModal);
  }

  public recibirTitulo(text:string):void{
    this.cabeceraModal=text;
    console.log(this.cabeceraModal);
  }
  public recibirEstadoModal(estado:boolean):void{
    this.isVisibleModal=estado;
    console.log(this.isVisibleModal);
  }

}
