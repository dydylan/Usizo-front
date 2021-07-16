import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {Observable} from "rxjs";
import {Role} from "../../models/Role";

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  @Input()
  user:User= new User(NaN,"","","",new Role(NaN,""),[])

  constructor() {
  }

  ngOnInit(): void {
  }

}
