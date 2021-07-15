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
import { ShoppingListSummaryComponent } from './composants/shopping-list-summary/shopping-list-summary.component';
import { SearchAndAddComponent } from './composants/search-and-add/search-and-add.component';
import { NeedToCheckComponent } from './composants/need-to-check/need-to-check.component';
import { NeedToModifyComponent } from './composants/need-to-modify/need-to-modify.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NeedToAddComponent } from './composants/need-to-add/need-to-add.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddUserComponent } from './composants/add-user/add-user.component';
import { UserSummaryComponent } from './composants/user-summary/user-summary.component';
import { ProductToAddComponent } from './product-to-add/product-to-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShoppingListManagerComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingListSummaryComponent,
    SearchAndAddComponent,
    NeedToCheckComponent,
    NeedToModifyComponent,
    NeedToAddComponent,
    AddUserComponent,
    UserSummaryComponent,
    ProductToAddComponent,
  ],
  imports: [BrowserModule,
    HttpClientModule, AppRoutingModule, FormsModule,FormsModule, ReactiveFormsModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

