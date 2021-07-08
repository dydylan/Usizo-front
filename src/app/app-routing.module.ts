import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { ShoppingListManagerComponent } from './composants/shopping-list-manager/shopping-list-manager.component';
import { LoginComponent } from './composants/login/login.component';
import { SignUpComponent } from './composants/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shopping-list-manager/:id', component: ShoppingListManagerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
