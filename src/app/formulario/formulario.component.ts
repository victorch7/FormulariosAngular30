import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  persona = {
    nombre : '',
    edad : ''
  };
  
  procesar() {
    console.log(this.persona);
  }
  
  validarCampos():boolean {
    return !(this.persona.nombre && this.persona.edad);
  }
    
  

}
