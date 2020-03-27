import { Component, OnInit } from '@angular/core';
import { Cliente } from '../servico/cliente';
import { ClienteService } from '../servico/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.css']
})
export class ClienteManterComponent implements OnInit {

  operador = 'Incluir';
  nomeCliente: string = '';
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService:ClienteService,
    private route: Router,
    private rotaAtiva:ActivatedRoute
  ) { }

  ngOnInit() {
    this.nomeCliente = this.rotaAtiva.snapshot.params.id;
    if(this.nomeCliente != null){
      this.operador = 'Alterar';
      this.clienteService.consultar(this.nomeCliente).subscribe(
        retorno =>{
          this.cliente = (<Cliente []>retorno)[0];
        }
      );
    }
  }

  incluir(){
    this.clienteService.incluir(this.cliente).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }

  alterar(){
    this.clienteService.alterar(this.cliente).subscribe(
      retorno =>{
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
  }


  voltar(){
    this.route.navigate(['cliente']);
  }

}
