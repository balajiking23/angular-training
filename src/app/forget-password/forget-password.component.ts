import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  constructor( 
    private router: Router, 
    ){} 

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "cpassword": new FormControl("", Validators.required),
});

onSubmit() {
console.log("reactive form submitted");
console.log(this.form);
}

login(){
  this.router.navigate(['']);
}

}
