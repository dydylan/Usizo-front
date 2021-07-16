import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  token : String | null = null
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {this.token = this.tokenStorageService.getToken()}

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href="login";
  }
}
