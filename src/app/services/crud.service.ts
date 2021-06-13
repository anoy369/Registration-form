import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApplicantForm } from '../interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  createForm(form: ApplicantForm): any{
    return this.firestore.collection('Form').add(form);
  }
}
