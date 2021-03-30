import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  noticiasMexico(): any {
    let url = "https://newsapi.org/v2/top-headlines?country=mx&apiKey=fd04ad13598e4a49bd2d641b47597158";

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
    let url = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=fd04ad13598e4a49bd2d641b47597158";

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
    let url = "https://newsapi.org/v2/top-headlines?country=co&apiKey=fd04ad13598e4a49bd2d641b47597158";

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
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fd04ad13598e4a49bd2d641b47597158";

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
