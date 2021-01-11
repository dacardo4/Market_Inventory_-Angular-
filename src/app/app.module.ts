import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { InicialComponent } from './componentes/inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NavbarComponent,
    FooterComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
