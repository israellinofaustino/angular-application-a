import { Component, OnInit } from '@angular/core'; //Primeiro parametro, tipo da classe = Component... vai importar do node_modules(biblioteca @angular)

@Component({
  selector: 'app-meu-primeiro2', //selector é um metadado... é o nome da tag para depois usar esse component no HTML -> EX: '<app-meu-primeiro2></app-meu-primeiro2>'
  templateUrl: './meu-primeiro2.component.html', //template = metadado
  styleUrls: ['./meu-primeiro2.component.css'] //
})

export class MeuPrimeiro2Component {}
