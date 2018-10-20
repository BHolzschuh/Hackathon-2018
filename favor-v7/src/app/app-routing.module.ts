import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public/public.component';
import { MembersComponent } from './member/members/members.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { DashComponent } from './member/dash/dash.component';
import { ProfileComponent } from './member/profile/profile.component';
import { LeaderboardComponent } from './member/leaderboard/leaderboard.component';

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
  {
    path: 'member',
    component: MembersComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
