export class Product {
  private _id:number
  private _nom:String
  private _imgUrl:String
  private _type:String

  constructor(id: number, name: String, imgUrl: String, type: String) {
    this._id = id;
    this._nom = name;
    this._imgUrl = imgUrl + id.toString() +".png";
    this._type = type;
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

  get type(): String {
    return this._type;
  }

  set type(value: String) {
    this._type = value;
  }
}
