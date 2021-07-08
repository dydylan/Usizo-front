import {Component, Input, OnInit} from '@angular/core';
import {ShoppingList} from "../../models/ShoppingList";

@Component({
  selector: 'app-need-to-check',
  templateUrl: './need-to-check.component.html',
  styleUrls: ['./need-to-check.component.css']
})
export class NeedToCheckComponent implements OnInit {

  @Input() private _shoppingList:ShoppingList = new ShoppingList(NaN,"",[],[]);

  constructor() { }

  ngOnInit(): void {
  }


  get shoppingList(): ShoppingList {
    return this._shoppingList;
  }

  set shoppingList(value: ShoppingList) {
    this._shoppingList = value;
  }
}
