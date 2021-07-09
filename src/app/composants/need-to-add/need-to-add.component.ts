import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {NeedService} from "../../services/need.service";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-need-to-add',
  templateUrl: './need-to-add.component.html',
  styleUrls: ['./need-to-add.component.css']
})
export class NeedToAddComponent implements OnInit {

  private _products:Product[] = []
  @Input() shoppingListId:number = 0
  private _formProd:FormGroup;
  private _qte:FormControl;

  constructor(private needService:NeedService, private productService:ProductsService, private shoppingListService:ShoppingListService, private activeRoute:ActivatedRoute,private formBuilder:FormBuilder) {
    this._qte=new FormControl('',[Validators.required])
    this._formProd=this.formBuilder.group({
      qte:this._qte
    })
  }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
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

}
