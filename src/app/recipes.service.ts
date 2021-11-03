import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _HttpClient:HttpClient) { }

  getRecipes(search:string):Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${search}`);
  }

  getRecipesDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  }
}
