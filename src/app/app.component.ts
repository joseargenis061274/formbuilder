import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formbuilder';
  form: FormGroup;
  constructor(public formBuilder: FormBuilder ){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.maxLength(10)]],
      apellido: ['',Validators.required],
      email: ['',Validators.required]
    });
  }
onFormSubmit(){
  if(this.form.value.nombre == 'argenis'){
    console.log("eres el mejor");
  }else{
    console.log("eres el peor");
  }
  console.log(this.form.value);
}
}
