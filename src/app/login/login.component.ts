import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public amount="150";
  
  constructor( 
    private router: Router, 
    ){}



  signup(){ 
   this.router.navigate(['/signup']);
  }

  forget(){
    this.router.navigate(['/forgetPassword']);
  }

  

}
