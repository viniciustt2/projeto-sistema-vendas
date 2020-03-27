import { ClienteService } from './servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './servico/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  
  cliente: Cliente = new Cliente();
  listaCliente: Cliente [] = [];
  selecionado: Cliente;
  
  constructor(
    private clienteService:ClienteService,
    private route: Router
  ) { }

  ngOnInit() {
    this.pesquisar();
 
  }

  pesquisar(){
      this.clienteService.consultar(this.cliente.nome).subscribe(
        (retorno: Cliente []) =>{
          this.listaCliente = retorno;
        }
      );
  }

  incluir(){
    this.route.navigate(['cliente/incluir']);
  }

  alterar(){
    this.route.navigate(['cliente/alterar/'+this.selecionado.nome]);
  }

  remover(){
    this.clienteService.remover(this.selecionado).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;
  }

}
