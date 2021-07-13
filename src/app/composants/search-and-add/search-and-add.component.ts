import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NeedService} from "../../services/need.service";
import {ProductsService} from "../../services/products.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-and-add',
  templateUrl: './search-and-add.component.html',
  styleUrls: ['./search-and-add.component.css']
})
export class SearchAndAddComponent implements OnInit {

  private _products:Observable<Product[]> = new Observable<Product[]>()
  @Input() shoppingListId:number = 0
  private _formProd:FormGroup;
  private _qte:FormControl
  search:String = ""

  constructor(private needService:NeedService, private productService:ProductsService, private shoppingListService:ShoppingListService, private activeRoute:ActivatedRoute,private formBuilder:FormBuilder) {
    this._qte=new FormControl('',[Validators.required])
    this._formProd=this.formBuilder.group({
      qte:this._qte
    })
  }

  ngOnInit(): void {
    this._products = this.productService.getAll()
  }

  get products(): Observable<Product[]> {
    return this._products;
  }

  set products(value: Observable<Product[]>) {
    this._products = value;
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

  addProd(id:number){
    this.productService.get(id.toString()).subscribe(prod =>
    {
      this.needService.create(this.shoppingListId,id,this._formProd.get('qte')?.value).subscribe(need =>
      {

      })

    })
  }

  searchProd(){
    this._products = this.productService.search(this.search)
  }

}
