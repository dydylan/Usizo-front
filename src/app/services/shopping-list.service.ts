import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingList} from "../models/ShoppingList";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  get(id:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("https://usizo-java.herokuapp.com/api/shoppingList?id="+id)
  }
  create(id:String): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("https://usizo-java.herokuapp.com/api/createList?id="+id)
  }
  remove(id:String,idL:String): Observable<User> {
    return this.http.get<User>("https://usizo-java.herokuapp.com/api/remList?id="+id+"&idL="+idL)
  }

  addUser(id:number,idL:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("https://usizo-java.herokuapp.com/api/addUserToList?id="+id+"&idL="+idL)
  }

  remUser(id:number,idL:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("https://usizo-java.herokuapp.com/api/remUserFromList?id="+id+"&idL="+idL)
  }
}
