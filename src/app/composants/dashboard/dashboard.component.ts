import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingList} from "../../models/ShoppingList";
import {User} from "../../models/User";
import {Role} from "../../models/Role";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _user:User= new User(NaN,"","","",new Role(NaN,""),[])
  private _userLists:ShoppingList[] = []
  @Input() private _id: String = "1";
  constructor(private userService:UserService, private shoppingListService:ShoppingListService) {
  }

  ngOnInit(): void {
    this.userService.get(this._id).subscribe(user =>{
      this._user = user
      for (let i in user.shoppingLists)
      {
        this.shoppingListService.get(user.shoppingLists[i].toString()).subscribe(sl =>this._userLists.push(sl))
      }
    })
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get userLists(): ShoppingList[] {
    return this._userLists;
  }

  set userLists(value: ShoppingList[]) {
    this._userLists = value;
  }

  selectList(){
    let str = ".col sm:col-span-4 md:col-span-6 need-to-check-section"
    let sect = document.querySelector(str)
    // @ts-ignore
    sect.innerHTML = '<app-need-to-check class="app-need-to-check" [_shoppingList]="'+sect.id+'"></app-need-to-check>'
  }
}
