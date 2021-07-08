import { Component, OnInit } from '@angular/core';
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-need-to-modify',
  templateUrl: './need-to-modify.component.html',
  styleUrls: ['./need-to-modify.component.css']
})
export class NeedToModifyComponent implements OnInit {

  private _shoppingList:ShoppingList = new ShoppingList(NaN,"",[],[]);

  constructor(private shoppingListService:ShoppingListService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.shoppingListService.get(params["id"]).subscribe(sl => {
        this._shoppingList = sl
      });
    })
  }

  get shoppingList(): ShoppingList {
    return this._shoppingList;
  }

  set shoppingList(value: ShoppingList) {
    this._shoppingList = value;
  }
}
