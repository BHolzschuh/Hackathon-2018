import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

export interface User {
  first: string;
  last: string;
  ctasks: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid;
  userDocument: AngularFirestoreDocument<User>;

  constructor(
    private authService: AuthService,
    private afS: AngularFirestore,
  ) { }

  getUserInfo() {
    this.uid = this.authService.getUID();
    this.userDocument = this.afS.doc('users/' + this.uid);
    return this.userDocument.valueChanges();
  }

}
