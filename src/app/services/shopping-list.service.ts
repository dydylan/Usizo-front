import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {ShoppingList} from "../models/ShoppingList";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  get(id:String): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("http://localhost:8080/api/shoppingList?id="+id)
  }
}
