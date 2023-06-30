import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.css']
})
export class NinosComponent {

  @Input() title?: string 
  @Output() titleChange = new EventEmitter<string>();

  emitTitleChange(){

  this.titleChange.emit(this.title); //capture el output y lo guarde la variable

  }

}
