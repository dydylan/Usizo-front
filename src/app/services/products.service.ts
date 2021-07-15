import { Injectable } from '@angular/core';
import {Product} from "../models/Product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>("https://usizo-java.herokuapp.com/api/products")
  }

  get(id:String): Observable<Product> {
    return this.http.get<Product>("https://usizo-java.herokuapp.com/api/product?id="+id)
  }

  search(name:String): Observable<Product[]>{
    return this.http.get<Product[]>("https://usizo-java.herokuapp.com/api/productByName?name="+name)
  }
}
