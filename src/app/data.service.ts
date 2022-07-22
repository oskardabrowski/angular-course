import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'ApiKey'
      })
    }


    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', httpOptions)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error');
      }
    ))
  }
}
