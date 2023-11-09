import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from 'src/login/login.component';
// import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: ''},
  // {path: '', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'all_projects', component: AllProjectsComponent},
  {path: 'add_project', component: AddProjectComponent},
  {path: 'all_users', component: AllUsersComponent},
  {path: 'add_user', component: AddUserComponent},
  {path: 'profile', component: ProfileComponent},

  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }