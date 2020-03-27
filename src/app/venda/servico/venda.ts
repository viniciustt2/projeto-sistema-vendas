import { VendaItem } from './venda-item';
import { Cliente } from 'src/app/cliente/servico/cliente';

export class Venda{
    codigo: string = '';
    data: Date;
    cliente: Cliente;
    listaVendaItem: VendaItem [] = [];
}