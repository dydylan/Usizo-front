import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Need} from "../models/Need";
import {ShoppingList} from "../models/ShoppingList";
import {AppModule} from "../app.module";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Need[]> {
    return this.http.get<Need[]>(API_URL + "/products")
  }
  create(slId:number,productId:number,qte:number): Observable<Need[]> {
    return this.http.get<Need[]>(API_URL + "/manageNeed?listId="+slId+"&productId="+productId+"&qte="+qte)
  }
  remove(slId:number,needId:number): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(API_URL + "/remNeed?listId="+slId+"&needId="+needId)
  }
  check(needId:number,state:boolean): Observable<Need> {
    return this.http.get<Need>(API_URL + "/checkNeed?needId="+needId+"&state="+state)
  }
}
