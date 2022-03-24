import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userData: any;
  showNotification: boolean = false;
  notificationText: string = '';
  notificationStatus: string = 'default';
  showLoader: boolean = false;

  constructor(public firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }
  async signin(e: any, email: string, password: string) {
    e.stopPropagation();
    e.preventDefault();
    this.showLoader = true;
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
      this.showLoader = false;
      this.showNotification = true;
      this.notificationText = 'Signed in successfully';
      this.notificationStatus = 'success';
      setTimeout(()=>{
        this.showNotification = false;
      }, 2000);
    } catch (err: any) {
      this.showLoader = false;
      this.notificationText = err.message;
      this.notificationStatus = 'error';
      this.showNotification = true;
      setTimeout(()=>{
        this.showNotification = false;
      }, 2000);
      console.log(err.message);
    }
  }

  getLoginStatus(e: any) {
    e.stopPropagation();
    e.preventDefault();
    const auth = getAuth();
    console.log(auth);
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }
}
