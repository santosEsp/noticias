import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login/login.service';
import { usuarioModel } from '../models/usuario';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser : usuarioModel;
  recordar = false;
  constructor( private _loginService : LoginService, private router: Router) { }

  ngOnInit(): void {

    this.loginUser = new usuarioModel();
    if(localStorage.getItem('rEmail')){
       this.loginUser.email = localStorage.getItem('rEmail');
       this.recordar = true;
    }
  }

  iniciarSesion(form: NgForm): any {

    if (form.invalid) {
      return console.log("Formulario invalido");
    }
    console.log("form valido");
    Swal.fire(
      'Iniciando sesión',
      'Espere',
      'info'
    );
    Swal.showLoading();

    this._loginService.login(this.loginUser).subscribe(
      (resp: any) => {
        if(this.recordar){
          localStorage.setItem('rEmail', this.loginUser.email);
        }
        else{
          localStorage.removeItem('rEmail');
        }
        Swal.close();
        this.router.navigateByUrl('/inicio');
      },
      (err) => {
        Swal.close();
        Swal.fire({
          title: 'Error al autenticar',
          text: 'Hubo un error',
          icon: 'error',
        });
      }
    );
  }

}
