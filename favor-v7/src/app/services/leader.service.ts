import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface User {
  first: string;
  last: string;
  ctasks: number;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  leadersCollection: AngularFirestoreCollection<User>;

  constructor(
    private db: AngularFirestore,
  ) { }

  getLeaders() {
    this.leadersCollection = this.db.collection('users', ref => {
      return ref.orderBy('ctasks', 'desc');
    });
    return this.leadersCollection.valueChanges();
  }

}
