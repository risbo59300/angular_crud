import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:'user-list', component: UserListComponent},
  {path: 'add-user', component: CreateUserComponent},
  {path: 'update/:id', component: UpdateUserComponent},
  {path: 'details/:id', component: UserDetailsComponent},
  {path: '', redirectTo: 'user-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
