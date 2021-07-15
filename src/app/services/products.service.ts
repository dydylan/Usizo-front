import { Injectable } from '@angular/core';
import {Product} from "../models/Product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppModule} from "../app.module";
import {API_URL} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + "/products")
  }

  get(id:String): Observable<Product> {
    return this.http.get<Product>(API_URL + "/product?id="+id)
  }

  search(name:String): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL + "/productByName?name="+name)
  }
}
