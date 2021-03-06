import { AuthenticationService } from './../services/authentication.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
user : User=new User();
bearerToken : string;
constructor(private router : Router,private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  validateUser() : void 
  {
   this.authenticationService.validateUser(this.user.email).subscribe(res=>{
        if(res)
        {
            console.log(res['token']);
            this.bearerToken=res['token'];
            this.authenticationService.setBearerToken(this.bearerToken);
            this.authenticationService.setStatus(true);
            this.router.navigate(['dashboard']);
          }

   },err=>{
     console.log(err);
   })  
  }

  
}
