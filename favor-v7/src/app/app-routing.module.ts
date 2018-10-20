import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public/public.component';
import { MembersComponent } from './member/members/members.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'public/login', pathMatch: 'full' },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
