//ISSO É UM MÓDULO DE FUNCIONALIDADE E NÃO UM MÓDULO DE RAIZ TIPO O (APP.MODULE.TS)// 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component'; //inports das classes do nosso projeto
import { CorsoDetalheComponent } from './corso-detalhe/corso-detalhe.component'; //inports das classes do nosso projeto

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ //components, diretivas e pipes que nós queremos utilizar neste módulo
    CursosComponent, //nome da classe
    CorsoDetalheComponent //nome da classe
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
