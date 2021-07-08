import {User} from "./User";
import {Need} from "./Need";

export class ShoppingList {
  private _id:number
  private _name:String
  private _members:User[]
  private _needList:Need[]


  constructor(id: number, name: String, members: User[], needs: Need[]) {
    this._id = id;
    this._name = name;
    this._members = members;
    this._needList = needs;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get members(): User[] {
    return this._members;
  }

  set members(value: User[]) {
    this._members = value;
  }

  get needList(): Need[] {
    return this._needList;
  }

  set needList(value: Need[]) {
    this._needList = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }
}
