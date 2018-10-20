import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Favor {
  accepted: boolean;
  completed: boolean;
  time: string;
  type: string;
  cid: string;
  sid: string;
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

  addFavor(value, cid) {
    this.favor.accepted = false;
    this.favor.completed = false;
    this.favor.cid = cid;
    this.favor.sid = '';
    this.favor.time = '6pm';
    this.favor.type = value.type;
    this.db.collection("favors").doc(cid).set(this.favor);
  }
}
