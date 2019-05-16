import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllianceComponent } from './alliance/alliance.component';
import { Alliance2Component } from './alliance2/alliance2.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [AppComponent, AllianceComponent, Alliance2Component, CadastroComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
