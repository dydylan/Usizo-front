import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingList} from "../models/ShoppingList";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  get(id:String): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("http://localhost:8080/api/shoppingList?id="+id)
  }
}
