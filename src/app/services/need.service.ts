import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Need} from "../models/Need";
import {ShoppingList} from "../models/ShoppingList";

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Need[]> {
    return this.http.get<Need[]>("https://usizo-java.herokuapp.com/api/products")
  }
  create(slId:number,productId:number,qte:number): Observable<Need[]> {
    return this.http.get<Need[]>("https://usizo-java.herokuapp.com/api/manageNeed?listId="+slId+"&productId="+productId+"&qte="+qte)
  }
  remove(slId:number,needId:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>("https://usizo-java.herokuapp.com/api/remNeed?listId="+slId+"&needId="+needId)
  }
  check(needId:number,state:boolean): Observable<Need> {
    return this.http.get<Need>("https://usizo-java.herokuapp.com/api/checkNeed?needId="+needId+"&state="+state)
  }
}
