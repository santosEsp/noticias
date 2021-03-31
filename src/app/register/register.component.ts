import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { usuarioModel } from '../models/usuario';
import { LoginService } from '../services/login/login.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser : usuarioModel;
  constructor( private _RegisterService : LoginService, private router: Router) { }

  ngOnInit(): void {
    this.registerUser = new usuarioModel();
  }

    registrarForm(form: NgForm): any {

    if (form.invalid) {
      return console.log("Formulario invalido");
    }
    console.log("form valido");
    Swal.fire(
      'Creando cuenta',
      'Espere',
      'info'
    );
    Swal.showLoading();

    this._RegisterService.newUser(this.registerUser).subscribe(
      (resp: any) => {
        Swal.close();
        Swal.fire({
          title: 'Usuario creado',
          text: 'Usuario creado',
          icon: 'success',
          allowOutsideClick: false
        });
      },
      (err) => {
        console.log(err);
        Swal.fire({
          title: 'Usuario no creado',
          text: err.error.error.message,
          icon: 'error',
          allowOutsideClick: false
        });
      }
    );
  }
    
}
