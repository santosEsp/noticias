import { Component, OnInit } from '@angular/core';
import {ApisService} from '../services/apis.service';
import { PaisSeleccionado } from '../models/paisSeleccionado';
import { CategoriaSeleccionada } from '../models/categoriaSeleccionada';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: any [] = [];
  country: string;
  category: string; 
  seleccionado = new PaisSeleccionado();
  catSeleccionado = new CategoriaSeleccionada();
 

  constructor(private apiService: ApisService) { }

  ngOnInit(): void {

    if(localStorage.getItem('paisValue')){

      if(localStorage.getItem('catValue')){
        console.log("paisValue y catValue True" );
        
        this.seleccionado.paisValue= localStorage.getItem('paisValue');
        this.filterChangedCategory(this.seleccionado.paisValue);
      } 

      else{
        this.seleccionado = {paisValue: localStorage.getItem('paisValue')}
        this.filterChanged(this.seleccionado.paisValue);
      }
      
    }
    else{
      this.seleccionado = {paisValue: '1'};
      this.filterChanged(this.seleccionado.paisValue);

    }

  }
  // filtrado por país

  public filterCountry = [
    { value: '1', display: 'México' },
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
        localStorage.setItem('nomPais', 'mx');
        localStorage.setItem('paisValue', '1');
        this.noticiasMexico();
        this.catSeleccionado = new CategoriaSeleccionada();
         break; 
      } 
      case '2': { 
        
        localStorage.setItem('nomPais', 'ar');
        localStorage.setItem('paisValue', '2');
        console.log('value is ', selectedValue);
        this.noticiasArgentina();
        this.catSeleccionado = new CategoriaSeleccionada();
         break; 
      } 

      case '3': { 
        
        localStorage.setItem('nomPais', 'co');
        localStorage.setItem('paisValue', '3');
        console.log('value is ', selectedValue);
        this.noticiasColombia();
        this.catSeleccionado = new CategoriaSeleccionada();
        break; 
     } 
     case '4': { 
      
      localStorage.setItem('nomPais', 'us');
      localStorage.setItem('paisValue', '4');
      console.log('value is ', selectedValue);
      this.noticiasEU();
      this.catSeleccionado = new CategoriaSeleccionada();
        break; 
     } 
      default: {
        localStorage.setItem('nomPais', 'mx');
        localStorage.setItem('paisValue', '1');
        this.noticiasMexico();
        this.catSeleccionado = new CategoriaSeleccionada();
         break; 
      } 
   } 
   
  }

  filterChangedCategory(selectedValue:string){
    
    switch(selectedValue) { 
      case '1': { 
        localStorage.setItem('category','business');
        localStorage.setItem('catValue', '1');
        this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
         break; 
      } 
      case '2': { 
        
        localStorage.setItem('category','entertainment');
        localStorage.setItem('catValue', '2');
        this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
         break; 
      } 

      case '3': { 
        
        localStorage.setItem('category','health');
        localStorage.setItem('catValue', '3');
        this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
        break; 
     } 
     case '4': { 
      
      localStorage.setItem('category','science');
      localStorage.setItem('catValue', '4');
      this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
        break; 
     } 
     case '5': { 
      
      localStorage.setItem('category','sports');
      localStorage.setItem('catValue', '5');
      this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
       break; 
    } 

    case '6': { 
      
      localStorage.setItem('category','technology');
      localStorage.setItem('catValue', '6');
      this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
      break; 
   } 
      default: { 
        
        localStorage.setItem('category','business');
        localStorage.setItem('catValue', '1');
        this.noticiasFiltro(localStorage.getItem('nomPais'), localStorage.getItem('category'));
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
    console.log('Recibidos a noticias filtro',country, category);
    this.catSeleccionado.catValue = localStorage.getItem('catValue');
    this.apiService.categoriaPais(country, category).subscribe(lista => {this.noticias = lista, console.log('Noticias', this.noticias);});
  }

  
}
