
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {
  PUBLIC_KEY = '';
  HASH = ''; 
  URL_API = `https://27swttpzfncorzn6mpfcbvpg2u0cobtm.lambda-url.us-west-2.on.aws/
  `;
 
  constructor( private http: HttpClient) { }

  getAllComics () : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=>data.data.results))
  }
}
