import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';  //se importa el servicio .--cla clase
@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {

  constructor(public messageservice:MessagesService) { //constructor que indica que es del servicio message serviceS
  }

  message:string = ''   //? 

  addMessage(){
    this.messageservice.add(this.message);
    this.message = ''; //borra lo que se ingresa en el input
  }


}
