import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../models/User";
import {Role} from "../../models/Role";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  menuHidden : Boolean = true;
  open : Boolean = false;

  token : String | null = null
  private _user:User= new User(NaN,"","","",new Role(NaN,""),[])

  displayMenu(){
    if (this.menuHidden)
    {
      this.menuHidden = false;
      this.open = true;
    } else
    {
      this.menuHidden = true;
      this.open = false;
    }
    console.log(this.menuHidden);
  }

  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.token = this.tokenStorageService.getToken()
    if (this.token != null) this.userService.get(this.tokenStorageService.getUser().id).subscribe(user => this._user = user)
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href="login";
  }

  get user(): User {
    return this._user;
  }
}
