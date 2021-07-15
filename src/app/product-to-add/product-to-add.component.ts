import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {ShoppingList} from "../models/ShoppingList";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NeedService} from "../services/need.service";
import {ProductsService} from "../services/products.service";
import {ShoppingListService} from "../services/shopping-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-to-add',
  templateUrl: './product-to-add.component.html',
  styleUrls: ['./product-to-add.component.css']
})
export class ProductToAddComponent implements OnInit {
  @Input()
  prod:Product = new Product(NaN,"","","")
  @Input()
  shoppingList:Observable<ShoppingList> = new Observable<ShoppingList>()
  @Output()
  shoppingListChange = new EventEmitter<Observable<ShoppingList>>();
  form: any = {
    qte:null
  };

  constructor(private needService:NeedService, private productService:ProductsService, private shoppingListService:ShoppingListService, private activeRoute:ActivatedRoute,private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
  }


  addProd(){
    this.shoppingList.subscribe(sl => {
      this.needService.create(sl.id,this.prod.id,this.form.qte).subscribe(() =>
        this.shoppingListChange.emit(this.shoppingListService.get(sl.id)))
    })
  }
}
