import {Product} from "./Product";

export class Need {
  private _id:number
  private _product:Product
  private _quantity:number
  private _founded:boolean


  constructor(id: number, product: Product, quantity: number, founded: boolean) {
    this._id = id;
    this._product = product;
    this._quantity = quantity;
    this._founded = founded;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get founded(): boolean {
    return this._founded;
  }

  set founded(value: boolean) {
    this._founded = value;
  }
}
