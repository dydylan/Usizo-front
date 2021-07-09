import {Component, OnInit} from '@angular/core';
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute} from "@angular/router";
import {NeedService} from "../../services/need.service";

@Component({
  selector: 'app-need-to-check',
  templateUrl: './need-to-check.component.html',
  styleUrls: ['./need-to-check.component.css']
})
export class NeedToCheckComponent implements OnInit {

  private _shoppingList:ShoppingList = new ShoppingList(NaN,"",[],[]);
  private _userId:number = 1

  constructor(private needService:NeedService,private shoppingListService:ShoppingListService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this._userId = params["user"]
      this.shoppingListService.get(params["id"]).subscribe(sl => {
        this._shoppingList = sl
      });
    })
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get shoppingList(): ShoppingList {
    return this._shoppingList;
  }

  set shoppingList(value: ShoppingList) {
    this._shoppingList = value;
  }

  checkNeed(id:number,find:boolean){
    this.needService.check(id,find).subscribe()
  }
}
