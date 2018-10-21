import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface User {
  first: string;
  last: string;
  ctasks: number;
}

export interface Favor {
  name: string;
  type: string;
  time: string;
  date: string;
  complete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid;
  userDocument: AngularFirestoreDocument<User>;
  favorCollection: AngularFirestoreCollection<Favor>;

  constructor(
    private authService: AuthService,
    private afS: AngularFirestore,
  ) { }

  getUserInfo() {
    this.uid = this.authService.getUID();
    this.userDocument = this.afS.doc('users/' + this.uid);
    return this.userDocument.valueChanges();
  }

  getUserFavors() {
    console.log(this.uid);
    this.favorCollection = this.afS.collection('users/' + this.uid + '/tasks');
    return this.favorCollection.valueChanges();
  }

}
