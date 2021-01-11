import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { ListaComponent } from './componentes/lista/lista.component';


const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'asdsad', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
