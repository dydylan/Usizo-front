import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { ShoppingListManagerComponent } from './composants/shopping-list-manager/shopping-list-manager.component';
import { LoginComponent } from './composants/login/login.component';
import { SignUpComponent } from './composants/sign-up/sign-up.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HeaderComponent } from './composants/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShoppingListManagerComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
