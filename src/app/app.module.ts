import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisHistorietasComponent } from './paginas/mis-historietas/mis-historietas.component';
import { MisCosasComponent } from './paginas/mis-cosas/mis-cosas.component';
import { MisColegasComponent } from './paginas/mis-colegas/mis-colegas.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PaginaSelectComponent } from './pagina-select/pagina-select.component';
import { MisColeguillasComponent } from './widgets-paginas/mis-coleguillas/mis-coleguillas.component';
import { DatosPersonalesComponent } from './widgets-paginas/datos-personales/datos-personales.component';
import { InfoColegaComponent } from './widgets-paginas/info-colega/info-colega.component';
import { InfoPosibleColegaComponent } from './widgets-paginas/info-posible-colega/info-posible-colega.component';
import { HistorietasComponent } from './widgets-paginas/historietas/historietas.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MisHistorietasComponent,
    MisCosasComponent,
    MisColegasComponent,
    EncabezadoComponent,
    PaginaSelectComponent,
    MisColeguillasComponent,
    DatosPersonalesComponent,
    InfoColegaComponent,
    InfoPosibleColegaComponent,
    HistorietasComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
