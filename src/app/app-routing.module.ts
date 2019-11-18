import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisHistorietasComponent } from './paginas/mis-historietas/mis-historietas.component';
import { MisColegasComponent } from './paginas/mis-colegas/mis-colegas.component';
import { MisCosasComponent } from './paginas/mis-cosas/mis-cosas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const routes: Routes = [
{path:'',component: MisHistorietasComponent},
{path:'home', component:MisHistorietasComponent},
{path:'amigos',component:MisColegasComponent},
{path: 'cosas', component: MisCosasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const routing:ModuleWithProviders= RouterModule.forRoot(routes);
