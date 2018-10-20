import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface User {
  first: string;
  last: string;
  phone: string;
  email: string;
  password: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  user = {} as User;

  constructor(
    private db: AngularFirestore,
  ) { }

  addUser(value, uid) {
    this.user.first = value.first;
    this.user.last = value.last;
    this.user.email = value.email;
    this.user.phone = value.phone;
    this.user.uid = uid;
    this.db.collection("users").doc(uid).set(this.user);
  }
}
