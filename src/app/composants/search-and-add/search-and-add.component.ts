import { Component, OnInit } from '@angular/core';
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-and-add',
  templateUrl: './search-and-add.component.html',
  styleUrls: ['./search-and-add.component.css']
})
export class SearchAndAddComponent implements OnInit {

  private _shoppingList:ShoppingList = new ShoppingList(NaN,"",[],[]);

  constructor(private shoppingListService:ShoppingListService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.shoppingListService.get(params["id"]).subscribe(sl => {
        console.log(params["id"])
        this._shoppingList = sl
      });
    })
  }

}
