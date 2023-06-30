import { Component , Input} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.css']
})
export class NinosComponent {

  @Input() title?: string 

}
