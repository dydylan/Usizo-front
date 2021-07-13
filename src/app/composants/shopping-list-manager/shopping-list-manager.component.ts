import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NeedService} from "../../services/need.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shopping-list-manager',
  templateUrl: './shopping-list-manager.component.html',
  styleUrls: ['./shopping-list-manager.component.css']
})
export class ShoppingListManagerComponent implements OnInit {

  private _userId:number = 1
  private _products:Product[] = []
  private _shoppingList:Observable<ShoppingList> = new Observable<ShoppingList>()
  private _formProd:FormGroup;
  private _qte:FormControl

  constructor(private needService:NeedService, private productService:ProductsService, private shoppingListService:ShoppingListService, private activeRoute:ActivatedRoute,private formBuilder:FormBuilder) {
    this._qte=new FormControl('',[Validators.required])
    this._formProd=this.formBuilder.group({
      qte:this._qte
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this._userId = params["user"]
      this._shoppingList = this.shoppingListService.get(params["id"])
    })
    this.productService.getAll().subscribe(prods => {
      this._products = prods
    })
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  get shoppingList(): Observable<ShoppingList> {
    return this._shoppingList;
  }

  set shoppingList(value: Observable<ShoppingList>) {
    this._shoppingList = value;
  }

  get formProd(): FormGroup {
    return this._formProd;
  }

  set formProd(value: FormGroup) {
    this._formProd = value;
  }

  get qte(): FormControl {
    return this._qte;
  }

  set qte(value: FormControl) {
    this._qte = value;
  }

  remList(id:String){
    this._shoppingList.subscribe(sl =>this.shoppingListService.remove(id,sl.id.toString()).subscribe(sl => window.location.href = "/dashboard"))
  }
}
