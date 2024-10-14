import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private dtService: DataTransferService, public router: Router) { }
  
  ngOnInit(): void {
  }
  username : string = "";
  password : string = "";
  intentNotGiven: boolean= true;
  intentGiven: boolean= false;
  loginIntent: boolean= false;
  notFound: boolean= false;
  buttonString: string = 'Login'

  switchIntent(choice){
    this.intentNotGiven=false;
    this.intentGiven=true;
    this.loginIntent=true;
    if (choice==='login'){
      this.buttonString = "Login"
    }else{
      this.buttonString='Create Account'
    }

  }
  attemptLogin() {
    this.user = new User(this.username, this.password)
    try{
    this.dtService.getUser(this.user).subscribe(
      (response)=> {
        console.log(response);
        this.router.navigate(['/estimate'])
        
      }
    )

    }catch{

    }finally{
      console.log("User not Found");
      this.notFound=true;
    }
  }

  goHome(){
    this.router.navigate(['/home'])
  }

}
