import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angForm: FormGroup ;

  caracteres: string = "Caracteres especiales como #$%&'()*+,-./:;<=>?[\]^_`{|}~";

  constructor(private fb: FormBuilder){
    this.angForm = this.fb.group({
      nombres : [null,[Validators.required]],
      primer_apellido : [null,[Validators.required]],
      segundo_apellido: [null,[Validators.required]],
      fecha_nacimiento:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/),
      ]],
      password_confirm:[null,[]]
    },{validators:this.checkPasswords})
  }

  checkPasswords(group: any) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('password_confirm').value;
  
    return password === confirmPassword ? null : { notSame: true };
  }

  ngOnInit(){}

  submit(value : any)  {
    alert(`Acaba de registrarse correctamente!`);
  }
  
  onClickSubmit(email : string,password : string){
  }
}