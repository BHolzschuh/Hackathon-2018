import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Favor {
  time: string;
  type: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavorService {

  favorsCollection: AngularFirestoreCollection<Favor>;
  favor = {} as Favor;

  constructor(
    private db: AngularFirestore,
  ) { }

  getFavors() {
    this.favorsCollection = this.db.collection('favors', ref => {
      return ref.orderBy('time');
    });
    return this.favorsCollection.valueChanges();
  }

}
