import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private messageService: MessageService) { }

  // getClientes(): Cliente[] {
  //   return CLIENTES;
  // }

  getClientes(): Observable<Cliente[]> {
    const clientes = of(CLIENTES);
    this.messageService.add('ClienteService: fetched clientes');
    return clientes;
  }

}
