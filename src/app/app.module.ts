import { BrowserModule } from '@angular/platform-browser'; // ele prepara a aplicação para ser executada em um browser
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({ //aqui começa a decorar a classe AppModule abaixo
  declarations: [
    AppComponent,
    MeuPrimeiro2Component
  ],
  imports: [ //aqui serve para colocar outros módulos que for usar se preciso(o import está declarado na primeira linha desse arquivo)
    BrowserModule,
    CursosModule
  ],
  providers: [], //aqui são os serviços que vão ficar disponiveis para todos os componentes da apricação
  bootstrap: [AppComponent]
})

export class AppModule { } //esse é o módulo raiz de toda nossa aplicação
