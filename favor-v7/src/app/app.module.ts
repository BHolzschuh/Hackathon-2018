import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Firebase config
import { environment } from '../environments/environment';
import { HeaderPublicComponent } from './public/header-public/header-public.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public/public.component';
import { MembersComponent } from './member/members/members.component';
import { HeaderPrivateComponent } from './member/header-private/header-private.component';
import { FooterComponent } from './footer/footer.component';
import { FavorlistComponent } from './member/favorlist/favorlist.component';
import { DashComponent } from './member/dash/dash.component';
import { ProfileComponent } from './member/profile/profile.component';
import { LeaderboardComponent } from './member/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    MembersComponent,
    HeaderPrivateComponent,
    FooterComponent,
    FavorlistComponent,
    DashComponent,
    ProfileComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
