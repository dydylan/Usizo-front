import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingList} from "../../models/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute} from "@angular/router";
import {NeedService} from "../../services/need.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-need-to-modify',
  templateUrl: './need-to-modify.component.html',
  styleUrls: ['./need-to-modify.component.css']
})
export class NeedToModifyComponent implements OnInit {

  @Input()
  shoppingList:Observable<ShoppingList> = new Observable<ShoppingList>()
  @Output()
  shoppingListChange = new EventEmitter<Observable<ShoppingList>>();

  constructor(private needService:NeedService,private shoppingListService:ShoppingListService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  remNeed(id:number){
    this.shoppingList.subscribe(sl =>
      this.needService.remove(sl.id,id)
        .subscribe(() =>
          this.shoppingListChange.emit(
            this.shoppingListService.get(
              sl.id.toString()
            )
          )
        )
    )
  }
}
