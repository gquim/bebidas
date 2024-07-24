import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoctelesService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  constructor(private http:HttpClient) { }

  getCocteles(nombre:string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}${nombre}`)
  }
}
 