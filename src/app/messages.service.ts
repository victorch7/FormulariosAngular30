import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  messages: string[] = ['a','b'];

  add(message:string){ //metodo de agregar

    this.messages.push(message); //agrega al arregglo

  }
}
