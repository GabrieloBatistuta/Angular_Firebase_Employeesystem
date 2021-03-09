import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable, resolveForwardRef } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.signOut();
  }
  register(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
}
