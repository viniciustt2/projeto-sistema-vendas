import { VendaItem } from './../servico/venda-item';
import { Produto } from './../../produto/servico/produto';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { VendaService } from './../servico/venda.service';
import { ClienteService } from './../../cliente/servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto/servico/produto.service';
import { Venda } from '../servico/venda';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.css']
})
export class VendaManterComponent implements OnInit {


  listaCliente: Cliente [] = [];
  listaProduto: Produto [] = [];

  operador = 'Incluir';

  vendaProduto: VendaItem = new VendaItem();
  venda: Venda = new Venda();

  constructor(
    private route:Router,
    private clienteService:ClienteService,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {
    this.clienteService.consultar('').subscribe(
        retorno =>{
          this.listaCliente = <Cliente []>retorno;
        }
    );

    this.produtoService.consultar('').subscribe(
        retorno =>{
          this.listaProduto = <Produto []>retorno;
        }
    );




  }

  incluir(){
    this.vendaService.incluir(this.venda).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }

  adicionarProduto(){
    this.venda.listaVendaItem.push(this.vendaProduto);
    this.vendaProduto = new VendaItem();
  }

  removerProduto(produto: Produto){
    let index  = this.listaProduto.indexOf(produto);
    this.venda.listaVendaItem.splice(index, 1);
  }

  voltar(){
    this.route.navigate(['venda']);
  }

}
