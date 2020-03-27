import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';
import { Produto } from './servico/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto [] = [];
  selecionado: Produto;

  constructor(
    private route: Router,
    private produtoService:ProdutoService,
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.produtoService.consultar(this.produto.nome).subscribe(
      (retorno: Produto []) =>{
        this.listaProduto = retorno;
      }
    );
  }

  incluir(){
    this.route.navigate(['produto/incluir']);
  }

  alterar(){
    this.route.navigate(['produto/alterar/'+this.selecionado.nome]);
  }

  excluir(){
    this.produtoService.remover(this.selecionado).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
      }
    );
  }


  selecionar(valor){
    this.selecionado = valor;
  }

}
