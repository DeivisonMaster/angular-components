import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
	public titulo: string;
	public texto: string;

  constructor() { }

  ngOnInit(): void {
	  this.titulo = 'O que são Components no Angular?';
	  this.texto  = 'Os componentes são uma parte importante de toda aplicação Angular, pois é neles que criamos a lógica por trás do funcionamento das views. Neste artigo vimos como eles são estruturados e como implementá-los em um projeto já criado. Também vimos como podemos configurar as variáveis criadas dentro de um componente e fazer com que os seus valores sejam visualizados em um template.';
  }

}
