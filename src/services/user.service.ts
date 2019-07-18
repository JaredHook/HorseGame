import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFirestore) { }

  //getAvatars(){
  //    return this.db.collection('/avatar').valueChanges()
  // } 

  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  loginUsers(value) {
    return this.db.collection('/users', ref => ref.where('login', '==', value.loginEmail)
      .where('password', '==', value.password)).snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value) {
    return this.db.collection('users').add({
      login: value.login,
      password: value.password,
      email: value.email,
      terms: value.terms,

      //nameToSearch: value.name.toLowerCase(),
      //surname: value.surname,
      //age: parseInt(value.age),
    });

  }
}
