import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-add-list-messages',
  templateUrl: './add-list-messages.component.html',
  styleUrls: ['./add-list-messages.component.css']
})
export class AddListMessagesComponent {

  constructor(public MessagesService: MessagesService){}
    

}
