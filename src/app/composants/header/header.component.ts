import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {}

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
