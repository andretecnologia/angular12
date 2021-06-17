import { CLIENTES } from './../mock-clientes';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  // cliente: Cliente = {
  //   id: 1,
  //   name: 'Andre'
  // };

  clientes = CLIENTES;
  selectedCliente?: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

}
