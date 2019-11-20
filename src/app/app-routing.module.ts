import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisHistorietasComponent } from './paginas/mis-historietas/mis-historietas.component';
import { MisColegasComponent } from './paginas/mis-colegas/mis-colegas.component';
import { MisCosasComponent } from './paginas/mis-cosas/mis-cosas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';


const routes: Routes = [
{path:'',component: MisHistorietasComponent},
{path:'home', component:MisHistorietasComponent},
{path:'amigos',component:MisColegasComponent},
{path: 'cosas', component: MisCosasComponent},
{path: '**', component: PageNotFoundComponent}
];

export const routing:ModuleWithProviders= RouterModule.forRoot(routes);
