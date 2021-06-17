import { CLIENTES } from './../mock-clientes';
import { MessageService } from '../message.service';
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

  constructor(private clienteService: ClienteService, private messageService: MessageService) {}

  ngOnInit() {
    this.getClientes();
  }



  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
    this.messageService.add(`ClientesComponent: Selected cliente id=${cliente.id}`);
  }

  // getClientes(): void {
  //   this.clientes = this.clienteService.getClientes();
  // }

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }

}
