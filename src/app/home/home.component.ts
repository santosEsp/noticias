import { Component, OnInit } from '@angular/core';
import {ApisService} from '../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: any [] = [];
  country: string;
  category: string; 
  constructor(private apiService: ApisService) { }

  ngOnInit(): void {
    this.noticiasMexico();
    this.country = "mx";
  }
  // filtrado por país

  public filterCountry = [
    { value: '1', display: 'Mexico' },
    { value: '2', display: 'Argentina' },
    { value: '3', display: 'Colombia' },
    { value: '4', display: 'Estados Unidos' }

 ];

 // filtrado por categoría
 public filterCategory = [
  { value: '1', display: 'Negocios' },
  { value: '2', display: 'Entretenimiento' },
  { value: '3', display: 'Salud' },
  { value: '4', display: 'Ciencia' },
  { value: '5', display: 'Deportes' },
  { value: '6', display: 'Tecnología' }

];


  filterChanged(selectedValue:string){
    
    switch(selectedValue) { 
      case '1': { 
        this.country = "mx";
        console.log('value is ', selectedValue);
        this.noticiasMexico();
         break; 
      } 
      case '2': { 
        this.country = "ar";
        console.log('value is ', selectedValue);
        this.noticiasArgentina();
         break; 
      } 

      case '3': { 
        this.country = "co";
        console.log('value is ', selectedValue);
        this.noticiasColombia();
        break; 
     } 
     case '4': { 
      this.country = "us";
      console.log('value is ', selectedValue);
      this.noticiasEU();
        break; 
     } 
      default: { 
        this.noticiasMexico();
         break; 
      } 
   } 
   
  }

  filterChangedCategory(selectedValue:string){
    console.log('value category is ', selectedValue);
    switch(selectedValue) { 
      case '1': { 
        this.category = "business";
        console.log("country: ", this.country,'Category is: ', this.category);
        this.noticiasFiltro(this.country, this.category);
         break; 
      } 
      case '2': { 
        this.category = "entertainment";
        console.log("country: ", this.country,'Category is: ', this.category);
        this.noticiasFiltro(this.country, this.category);
         break; 
      } 

      case '3': { 
        this.category = "health";
        console.log("country: ", this.country,'Category is: ', this.category);
        this.noticiasFiltro(this.country, this.category);
        break; 
     } 
     case '4': { 
      this.category = "science";
      console.log("country: ", this.country,'Category is: ', this.category);
        this.noticiasFiltro(this.country, this.category);
        break; 
     } 
     case '5': { 
      this.category = "sports";
      console.log("country: ", this.country,'Category is: ', this.category);
        this.noticiasFiltro(this.country, this.category);
       break; 
    } 

    case '6': { 
      this.category = "technology";
      console.log("country: ", this.country,'Category is: ', this.category);
      this.noticiasFiltro(this.country, this.category);
      break; 
   } 
      default: { 
        this.category = "business";
        console.log("country: ", this.country,'Category is: ', this.category);
        this.noticiasFiltro(this.country, this.category);
         break; 
      } 
   } 
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


  noticiasFiltro(country: string, category: string){
    this.apiService.categoriaPais(country, category).subscribe(lista => {this.noticias = lista, console.log('Noticias', this.noticias);});
  }

}
