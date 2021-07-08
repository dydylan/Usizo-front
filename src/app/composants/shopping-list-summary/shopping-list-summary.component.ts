import {Component, Input, OnInit} from '@angular/core';
import {ShoppingList} from "../../models/ShoppingList";
import {UserService} from "../../services/user.service";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-summary',
  templateUrl: './shopping-list-summary.component.html',
  styleUrls: ['./shopping-list-summary.component.css']
})
export class ShoppingListSummaryComponent implements OnInit {


  @Input()
  shoppingList:ShoppingList = new ShoppingList(NaN,"",[],[])
  constructor(private userService:UserService, private shoppingListService:ShoppingListService) {
  }

  ngOnInit(): void {
  }

}
