import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { ResponseType } from './responseType.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ResponseTypeService {

  responseTypeLocal: ResponseType[];
  responseTypeLocalTwo: ResponseType;

  constructor(private firestore: AngularFirestore) { }

  getresponseTypes() {
    return this.firestore.collection('responseTypes', ref => ref.orderBy('responseTypeName', 'desc')).snapshotChanges();
  }

  addBeer(responseType: ResponseType) {
    this.firestore.doc('responseTypes/' + responseType.id).update({
      numResponses: firebase.firestore.FieldValue.increment(1)
    });
  }

  subtractBeer(responseType: ResponseType) {
    if (responseType.numResponses > 0) {
      this.firestore.doc('responseTypes/' + responseType.id).update({
        numResponses: firebase.firestore.FieldValue.increment(-1)
      });
    }
  }

  updateResponseType(responseTypeId: string) {
    this.firestore.doc('responseTypes/' + responseTypeId).update({
      numResponses: firebase.firestore.FieldValue.increment(-1)
    });
  }
}
