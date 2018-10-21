import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

export interface Favor {
  time: string;
  type: string;
  name: string;
  date: string;
  complete?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FavorService {

  favorsCollection: AngularFirestoreCollection<Favor>;
  favor = {} as Favor;
  uid;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
  ) { }

  getFavors() {
    this.favorsCollection = this.db.collection('favors', ref => {
      return ref.orderBy('sort');
    });
    return this.favorsCollection.valueChanges();
  }

  addFavor(favor: Favor) {
    this.uid = this.authService.getUID();
    favor.complete = false;
    this.db.collection("users/" + this.uid + "/tasks").doc(favor.name).set(favor);
  }

}
