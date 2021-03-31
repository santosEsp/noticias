import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string;

  constructor( private _logOutService: LoginService, private router : Router) { }

  ngOnInit(): void {
    this.leerEmail();
  }

  leerEmail(){
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      console.log('email obtenido',this.email);
    }
  }

  logOut(){
    
    this._logOutService.logout();
    this.router.navigateByUrl('/iniciar-sesion');
    
  }
}
