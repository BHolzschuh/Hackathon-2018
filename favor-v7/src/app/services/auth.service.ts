import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CreateuserService } from './createuser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userService: CreateuserService,
  ) { }

  async login(value) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password);
      if (result) {
        console.log(result);
        this.router.navigateByUrl('member/dash');
      }
    } catch (e) {
      console.log(e.code);
      return this.checkErrors(e.code)
    }
  }

  async register(value) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password);
      if (result) {
        console.log('user registered');
        this.userService.addUser(value, this.getUID());
        this.router.navigateByUrl('member/dash');
      }
    } catch (e) {
      console.error(e);
      return this.checkErrors(e.code);
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUID() {
    return this.afAuth.auth.currentUser.uid;
  }

  checkErrors(error: String) {
    if (error == "auth/invalid-email") {
      return "Invalid Email Address";
    }
    else if (error == "auth/user-not-found" || error == "auth/wrong-password") {
      return "Incorrect Email/Password";
    }
    else if (error == "auth/argument-error") {
      return "Please fill out both fields";
    }
    else if (error == "auth/email-already-in-use") {
      return "That email is already in use";
    }
  }

}
