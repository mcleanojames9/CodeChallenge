import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private dtService: DataTransferService) { }
  
  ngOnInit(): void {
  }
  username : string = "";
  password : string = "";
  intentGiven: boolean= false;
  intentNotGiven: boolean= true;
  loginIntent: boolean= false;
  createAccountIntent: boolean=false;

  switchIntent(){
    this.intentGiven=true;
    this.intentNotGiven=false;
    if (this.loginIntent){
      this.loginIntent = false;
      this.createAccountIntent = true;
    }else{
      this.loginIntent=true;
      this.createAccountIntent=false;
    }

  }
  attemptLogin() {
    this.user = new User(this.username, this.password)
    this.dtService.getUser(this.user).subscribe(
      (response)=> {
        console.log(response);
      }
    )
  }

}
