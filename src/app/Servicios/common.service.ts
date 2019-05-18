import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Http  } from '@angular/http';
import { Observable , throwError  } from 'rxjs' ; 
import { Company } from '../class/company'


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
   // 'Content-Type' : 'application/json' ,
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  //  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  // 'Access-Control-Allow-Credentials': 'true' , 
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl: string = 'http://localhost:3000/api/companies/GetAll' ;
 
  


  constructor(private http: HttpClient ,  private __http__: Http) { }

  getAlld() {

    return this.http.get(this.baseUrl) ;
  }


 // GetEmployee():Observable<Company[]>
 // {

 // return this.http.get<Company[]>('http://localhost:3000/api/companies/GetAll' 
 // ,{
 //   headers: {  'Content-Type': 'application/json'  //'Content-Type' : 'application/json' ,
 //   'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  //  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS', 
  //  'Access-Control-Allow-Origin':'*' 
  //  } /** Use Content-type as your requirement undifined OR application/json**/
 // }).pipe();

  //}

  

  /*
  GetEmployee() : Observable<Company[]>
  {

  return this.http.get<Company[]>('http://localhost:3000/api/companies/GetAll', httpOptions)
      .pipe(
      //  catchError(this.handleError) 

      );

  }
*/


}
