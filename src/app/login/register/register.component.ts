import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  constructor(private authservice:AuthService, private dialogref:MatDialogRef<RegisterComponent>, ) { }

  ngOnInit(): void {
  }

  signUp(form:any){
    console.log(form.value);
    this.authservice.signUp({
      email:form.value.name,
      password:form.value.password,
      returnSecureToken:true})
      .subscribe(res => (console.log('response',res)
    ));
    this.dialogref.close();

    

  }

}
