import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Need} from "../models/Need";

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Need[]> {
    return this.http.get<Need[]>("http://localhost:8080/api/products")
  }
  create(slId:number,productId:number,qte:number): Observable<Need[]> {
    return this.http.get<Need[]>("http://localhost:8080/api/manageNeed?listId="+slId+"&productId="+productId+"&qte="+qte)
  }
}
