import { Component, OnInit } from '@angular/core';



@Component({
  
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  ventas:string = "Prueba"
  // labels1: string[] = ['Compras', 'Ventas', 'Reservas','Otros'];
  // public data1 = [[ 350, 450, 100 ]]
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [
    [10, 15, 40],
  ];
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
