import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],

  exports: [HeroeComponent, ListadoComponent],

  //en import van modulos, para poder trabajar con librerias no tan basicas de angular
  imports: [CommonModule],
})
export class heroesModule {}
