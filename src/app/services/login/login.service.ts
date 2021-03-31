import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from '../../models/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyDR5oZvR8Dop5mB7ghPQOm1wIqdgFuafow';
  userTkn: string;
  email: string;

  // Crear usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Iniciar sesión de usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { 
    this.leerTkn();
  }

  login(usuario: usuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http
      .post(
        `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
        authData
      )
      .pipe(
        map((resp) => {
          console.log('Respuesta recibida', resp);
          this.guardarTkn(resp['idToken'], resp['email']);
          return resp;
        })
      );
  }

  newUser(usuario: usuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http
      .post(`${this.url}/accounts:signUp?key=${this.apiKey}`, authData)
      .pipe(
        map((resp) => {
          this.guardarTkn(resp['idToken'], resp['email']);
          return resp;
        })
      );
  }

  logout() { 
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  guardarTkn(token: string, email: string): any {
    this.userTkn = token;
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  leerTkn() {
    if (localStorage.getItem('token')) {
      this.userTkn = localStorage.getItem('token');
    }
  }

  estaAutenticado(): boolean {
    this.userTkn = localStorage.getItem('token');
    // const expira = Number(localStorage.getItem('calculatedExpiresIn'));
    // const horaExpira = new Date();
    // horaExpira.setTime(expira);

    // if (horaExpira > new Date()) {
    //   return true;
    // } else {
    //   return false;
    // }

    //  (this.userTkn.length > 5) ? true : false
    
    if(this.userTkn === null){
      return false;
    }

    else if(this.userTkn.length >20){
      return true;
    }
    
    else{
      return false;
    }

  }

  
}
