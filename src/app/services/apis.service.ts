import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  
  constructor(private http: HttpClient) { }
  
  

  noticiasMexico(): any {
    let url = "https://newsapi.org/v2/top-headlines?country=mx&apiKey=a37ee538325f48cfb3f8d780820443e9";

    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            return resp.articles;
          }
        )
      );
  }


  noticiasArgentina(): any {
    let url = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=a37ee538325f48cfb3f8d780820443e9";

    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            return resp.articles;
          }
        )
      );
  }

  noticiasColombia(): any {
    let url = "https://newsapi.org/v2/top-headlines?country=co&apiKey=a37ee538325f48cfb3f8d780820443e9";

    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            return resp.articles;
          }
        )
      );
  }

  noticiasEU(): any {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a37ee538325f48cfb3f8d780820443e9";

    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            return resp.articles;
          }
        )
      );
  }

  categoriaPais(country: string, category: string){
    console.log('Service categoria:', country, category);
    let url = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=a37ee538325f48cfb3f8d780820443e9";
    console.log("URL categoría",url);
    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            return resp.articles;
          }
        )
      );
  }

}
