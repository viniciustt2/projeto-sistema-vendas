import { VendaService } from './servico/venda.service';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/servico/cliente.service';
import { Cliente } from '../cliente/servico/cliente';
import { Venda } from './servico/venda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {



  listaCliente: Cliente[] = [];
  selectionado: Venda;
  venda: Venda = new Venda();
  listaVenda: Venda[] = [];

  constructor(
    private clienteService: ClienteService,
    private vendaService: VendaService,
    private route: Router
  ) { }

  ngOnInit() {
    this.clienteService.consultar('').subscribe(
      retorno => {
        this.listaCliente = <Cliente[]>retorno;
      }
    );

    let codigoCliente = '';
    if (this.venda.cliente != null) {
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;

      }
    );

  }

  pesquisar() {
    let codigoCliente = '';
    if (this.venda.cliente != null) {
      codigoCliente = this.venda.cliente.codigo;
    }
    this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
      }
    );
  }
  incluir(){
    this.route.navigate(['venda/incluir']);
  }


  excluir() {
    this.vendaService.remover(this.selectionado).subscribe(
      retorno => {
        alert(retorno['mensagem']);
      }
    );
  }

  selecionar(valor) {
    this.selectionado = valor;
  }

}
