import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
    this.isLoggedIn$ = this.user$.pipe(switchMap(user => {
      if (user)
        return of(true)
      else
        return of(false)
    }))
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      updatedAt: new Date()
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

}
