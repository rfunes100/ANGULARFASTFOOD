import { Injectable } from '@angular/core';
import { Connection } from '../class/connection' ;
import { HttpClient   } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }
 // retorna todos los selects a las tablas sin parametros
  getAll(baseUrl: string   )  {
    // url: string = AppSettings.API_ENDPOINT + this.baseUrl ;
    console.log( Connection.API_ENDPOINT , ) ;
   
     return this.http.get(`${Connection.API_ENDPOINT}/${baseUrl}` ) ;
    console.log('Metodo get a la base de datos',Connection.API_ENDPOINT +baseUrl);
    }

    getOnly(baseUrl: string , id: Number  )  {
      // url: string = AppSettings.API_ENDPOINT + this.baseUrl ;
      console.log( Connection.API_ENDPOINT , ) ;
     
       return this.http.get(`${Connection.API_ENDPOINT}/${baseUrl}/${id}` ) ;
      console.log('Metodo get a la base de datos',Connection.API_ENDPOINT +baseUrl);
      }
}
