import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; /*se dsebe importar , ADEMAS SE IMPORTA LIBREIRA DE VALIDACION EN FORM REACTIVE*/

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  constructor(private fb: FormBuilder){//constructor con formbuil

  }

  get nombre(){ /**Metodo de retorno para la variable nombre */
    return this.formUser.get('nombre') as FormControl;
  }  

  get email(){ /**Metodo de retorno para la variable email */
    return this.formUser.get('email') as FormControl;
  }

  // formUser = new FormGroup({  /**Exige que pasemos un objeto  {}*/
  //   'nombre' : new FormControl('', Validators.required),
  //   'email' : new FormControl('' , [Validators.required, Validators.email])
  // });

  formUser = this.fb.group({ //constructor con formbuil con sus caracteristicas nos libra de instanciar
    'nombre': ['', Validators.required],
    'email': ['' , [Validators.required, Validators.email]], 
  });

  procesar(){ /**Metodo para procesar la informacion */
  console.log(this.formUser.value);
  }
//  nombre = new FormControl('', Validators.required); /*Se declara las variables de tipo formcontrol, con requeride */
//  email = new FormControl('' , [Validators.required, Validators.email]); /*Manejar varias validaciones se usa arrays */

}
