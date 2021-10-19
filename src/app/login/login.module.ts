import { AuthService } from './../service/auth.service';
import { PublicationService } from './../service/publication.service';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonLabel, NgbButtonsModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
//Materiasl
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes:Routes=[
  {path:'', component:LoginComponent}

  //Al declarar login dos deja de funcionar el archivo de routing????
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    NgbToastModule,//Ngboostrap
    NgbButtonsModule,//Ngboostrap
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, //Formularios basados en plantillas
    ReactiveFormsModule,//Formularios reactivos
    MatDialogModule
    //No se deben mesclar en un solo modulo estos dos tipod de formularios
    
  ],

  providers:[
    //Los servicios se declaran en el provider, y se encuentran disponibles en todo el modulo, es decir cualquier componente dentro del modulo puede ejecutarlo solo hay que inyectarlos
    PublicationService,
    AuthService
  ]
})
export class LoginModule { }
