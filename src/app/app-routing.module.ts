import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { ShoppingListManagerComponent } from './composants/shopping-list-manager/shopping-list-manager.component';
import { LoginComponent } from './composants/login/login.component';
import { SignUpComponent } from './composants/sign-up/sign-up.component';
import {NeedToCheckComponent} from "./composants/need-to-check/need-to-check.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
    children: [{ path: 'need-to-check/:user/:id', component: NeedToCheckComponent}] },
  { path: 'shopping-list-manager/:user/:id', component: ShoppingListManagerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
