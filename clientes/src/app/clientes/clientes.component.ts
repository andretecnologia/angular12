import { CLIENTES } from './../mock-clientes';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  selectedCliente?: Cliente;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.getClientes();
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  getClientes(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
