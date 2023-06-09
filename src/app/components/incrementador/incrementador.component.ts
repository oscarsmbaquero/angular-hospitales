import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent  implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
    
  }
   @Input('valor')progreso: number = 85; 
   @Input()btnClass: string = 'btn btn-primary';
   //@Input()progreso: number = 85;
   @Output('valorS') valorSalida: EventEmitter<number> = new EventEmitter();

  // getPorcentaje() {
  //   return `${this.progreso}%`;
  // }
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      this.valorSalida.emit(100);
      return;
    } else if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      this.valorSalida.emit(0);
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

  }
  onChanges(nuevoValor: number) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    }
    else if(nuevoValor <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
    
  }

}
