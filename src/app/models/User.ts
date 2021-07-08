import {Role} from "./Role";

export class User {
  private _id:number
  private _nom:String
  private _imgUrl:String
  private _password:String
  private _role:Role
  private _shoppingLists:number[]

  constructor(id: number, name: String, imgUrl: String, password: String, role: Role, shoppingLists: number[]) {
    this._id = id;
    this._nom = name;
    this._imgUrl = imgUrl;
    this._password = password;
    this._role = role;
    this._shoppingLists = shoppingLists;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): String {
    return this._nom;
  }

  set nom(value: String) {
    this._nom = value;
  }

  get imgUrl(): String {
    return this._imgUrl;
  }

  set imgUrl(value: String) {
    this._imgUrl = value;
  }


  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }

  get shoppingLists(): number[] {
    return this._shoppingLists;
  }

  set shoppingLists(value: number[]) {
    this._shoppingLists = value;
  }
}
