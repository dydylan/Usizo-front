import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NeedService} from "../../services/need.service";
import {Observable} from "rxjs";
import {TokenStorageService} from "../../services/token-storage.service";

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

  constructor(private token: TokenStorageService,private needService:NeedService, private productService:ProductsService, private shoppingListService:ShoppingListService, private activeRoute:ActivatedRoute,private formBuilder:FormBuilder) {
    this._qte=new FormControl('',[Validators.required])
    this._formProd=this.formBuilder.group({
      qte:this._qte
    })
  }

  ngOnInit(): void {
    this.userId = this.token.getUser().id
    this.activeRoute.params.subscribe(params =>{
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

  remList(id:number){
    this._shoppingList.subscribe(sl =>this.shoppingListService.remUser(id,sl.id).subscribe(() => window.location.href = "/dashboard"))
  }


  remUser(id:number){
    this.shoppingList.subscribe(sl => {
      this._shoppingList = this.shoppingListService.remUser(id,sl.id)
      this.shoppingList.subscribe()
      })
  }
}
