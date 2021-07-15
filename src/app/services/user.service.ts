import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {AppModule} from "../app.module";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(id:String): Observable<User> {
    return this.http.get<User>(AppModule.API_URL + "user?id="+id)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(AppModule.API_URL + 'test/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(AppModule.API_URL + 'test/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(AppModule.API_URL + 'test/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(AppModule.API_URL + 'test/admin', { responseType: 'text' });
  }

  search(name:String): Observable<User[]>{
    return this.http.get<User[]>(AppModule.API_URL + "usersByName?name="+name)
  }
}
