import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { FooterComponent } from './core/footer/footer.component';
import { PublicComponent } from './public/public/public.component';
import { HeaderComponent } from './public/header/header.component';
import { MembersComponent } from './members/members/members.component';
import { PrivateHeaderComponent } from './members/private-header/private-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    PublicComponent,
    HeaderComponent,
    MembersComponent,
    PrivateHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
