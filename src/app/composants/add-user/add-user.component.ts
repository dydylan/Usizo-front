import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  varDisplay : String = "none";

  displayModal(){
    this.varDisplay = "flex";
  }

  hideModal(){
    this.varDisplay = "none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
