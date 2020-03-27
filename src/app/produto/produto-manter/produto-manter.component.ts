import { Produto } from './../servico/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../servico/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-manter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.css']
})
export class ProdutoManterComponent implements OnInit {


  operador = 'Incluir';
  nomeProduto: string = '';
  produto: Produto = new Produto();


  constructor(
    private produtoService:ProdutoService,
    private route: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit() {
      this.nomeProduto = this.rotaAtiva.snapshot.params.id;
      if(this.nomeProduto != null){
        this.operador = 'Alterar';
        this.produtoService.consultar(this.nomeProduto).subscribe(
          retorno =>{
            this.produto = (<Produto []>retorno)[0];
          }
        );
      }
  }

  incluir(){
    this.produtoService.incluir(this.produto).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }

  alterar(){
    this.produtoService.alterar(this.produto).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }


  voltar(){
    this.route.navigate(['produto']);
  }

}
