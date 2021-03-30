import { Component, OnInit } from '@angular/core';
import {ApisService} from '../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: any [] = [];
  constructor(private apiService: ApisService) { }

  ngOnInit(): void {
  }

  noticiasMexico(){
    this.apiService.noticiasMexico().subscribe(lista => {this.noticias = lista, console.log('Noticias', this.noticias);});
  }

  noticiasArgentina(){
    this.apiService.noticiasArgentina().subscribe(lista => {this.noticias = lista, console.log('Noticias', this.noticias);});
  }

  noticiasColombia(){
    this.apiService.noticiasColombia().subscribe(lista => {this.noticias = lista, console.log('Noticias', this.noticias);});
  }
  noticiasEU(){
    this.apiService.noticiasEU().subscribe(lista => {this.noticias = lista, console.log('Noticias', this.noticias);});
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
}
}
