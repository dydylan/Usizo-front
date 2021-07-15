import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Observable} from "rxjs";
import {ShoppingList} from "../../models/ShoppingList";
import {User} from "../../models/User";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  varDisplay : String = "none";

  @Input()
  shoppingList:Observable<ShoppingList> = new Observable<ShoppingList>()
  @Output()
  shoppingListChange = new EventEmitter<Observable<ShoppingList>>();

  private _users:Observable<User[]> = new Observable<User[]>()
  search:String = ""

  displayModal(){
    this.varDisplay = "flex";
  }

  hideModal(){
    this.varDisplay = "none";
  }

  constructor(private userService:UserService, private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.searchUser()
  }

  addUser(id:number){
    this.shoppingList.subscribe(sl => {
      this.shoppingListService.addUser(id,sl.id).subscribe(() =>
        this.shoppingListChange.emit(this.shoppingListService.get(sl.id)))
      this.hideModal()
    })
  }

  searchUser(){
    this._users = this.userService.search(this.search)
  }

  get users(): Observable<User[]> {
    return this._users;
  }

  set users(value: Observable<User[]>) {
    this._users = value;
  }
}
