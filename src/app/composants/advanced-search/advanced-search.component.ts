import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  displayAdvancedSearch : String = "none";

  displayModal(){
    this.displayAdvancedSearch = "flex";
  }

  hideModal(){
    this.displayAdvancedSearch = "none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
