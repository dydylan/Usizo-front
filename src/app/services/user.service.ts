import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {Product} from "../models/Product";

const API_URL = 'https://usizo-java.herokuapp.com/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(id:String): Observable<User> {
    return this.http.get<User>("https://usizo-java.herokuapp.com/api/user?id="+id)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  search(name:String): Observable<User[]>{
    return this.http.get<User[]>("https://usizo-java.herokuapp.com/api/usersByName?name="+name)
  }
}
