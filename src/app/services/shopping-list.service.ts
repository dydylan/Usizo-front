import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingList} from "../models/ShoppingList";
import {User} from "../models/User";
import {AppModule} from "../app.module";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  get(id:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(API_URL + "/shoppingList?id="+id)
  }
  create(id:String): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(API_URL + "/createList?id="+id)
  }
  remove(id:String,idL:String): Observable<User> {
    return this.http.get<User>(API_URL + "/remList?id="+id+"&idL="+idL)
  }

  addUser(id:number,idL:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(API_URL + "/addUserToList?id="+id+"&idL="+idL)
  }

  remUser(id:number,idL:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(API_URL + "/remUserFromList?id="+id+"&idL="+idL)
  }
}
