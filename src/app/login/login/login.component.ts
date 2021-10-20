import { RegisterComponent } from './../register/register.component';
import { AuthService } from './../../service/auth.service';
import { PublicationService } from './../../service/publication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';//Para el navigate ademas del router se tiene que importar ActivatedRoute de esta importacion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
    constructor(private publication:PublicationService, 
                private authservice:AuthService, /*inyectamos el diag de materials*/
                private matdiag:MatDialog,
                private router:Router
                ) {
      
    }
      

    ngOnInit(): void {
      this.publication.getAll().subscribe(res=>console.log(res))

    };



    create(){

      this.publication.create({"date": "Fecha expirada de prueba",
      "descripction": "Modificacion de la variable de entorno al mismo json ",
      "idUser": 30000000,
      "imageUrl": "http://firebase/img.jpg",
      "userPhothoUrl": "http://firebase/user1.jpg"})
      .subscribe(res => console.log(res));
    }

    login(form:any){
      console.log('Datos: ',form);
      this.authservice.login({
        email: form.value.email,
        password: form.value.password,
        returnSecureToken: true
      }).subscribe(res => {
        console.log('Response: ',res);
        this.router.navigate(['pages']);
      });
      
    }

    onCreateNewAcount(): void{
      this.matdiag.open(RegisterComponent);
    }

}
