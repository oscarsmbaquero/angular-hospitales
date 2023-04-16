
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementadorComponent,
    GraficaComponent
  ],
})
export class ComponentsModule { }
