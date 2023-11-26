import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';
@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private apiKey: string = 'fO0D6I1oyyto2T0Ox6vBBxspAnnJ2rYc';
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { 
    // executes only 1 time when the service is called. Singleton
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; // ! is a null operator
    // Linea anterior equivalente a: 
    // if(localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')) || [];
    // }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  callGifsPage(query: string) {
    const params =  new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);
    return this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params});
  }
  
  buscarGifs(query: string = '') {
   query = query.trim().toLowerCase();

    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial)); // localstorage only accepts strings
    }

    this.callGifsPage(query).subscribe( (gifResponse )=> {
      this.resultados = gifResponse.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados)); // localstorage only accepts strings
    });
  }
}
