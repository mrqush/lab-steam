import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

initializeApp(environment.firebase);
const db = getFirestore();

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users: Array<any> = [];
  title: string = 'My friends';
  showLoader: boolean = false;

  searchFriend(e: any, data: string) {
    e.stopPropagation();
    e.preventDefault();

    let reg = new RegExp(data.trim().toLowerCase());
    if (data.trim() === '') {
      this.users.length = 0;
      this.title = 'My friends';
      this.getFriends();
      return
    }

    this.getUsers()
      .then(() => {
        this.users = this.users.filter(item => {
          if (item.name.toLowerCase().search(reg) != -1) {
            return true
          }
          return false
        })
        this.title = `Search Friends: ${data}`;
      })
  }

  async getUsers() {
    this.users.length = 0;
    this.showLoader = true;
    const colRef = collection(db, 'users');
    return getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.users.push({ ...doc.data(), userId: doc.id });
        })
        this.showLoader = false;
      })
      .catch(err => {
        this.showLoader = false;
        console.log(err.message);
      })
  }

  async getFriends() {
    this.showLoader = true;
    const colRef = collection(db, 'users');
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const currentUser: any = doc.data();
          if (currentUser.isFriend) {
            this.users.push({ ...doc.data(), userId: doc.id });
          }
        })
        this.showLoader = false; 
      })
      .catch(err => {
        this.showLoader = false;
        console.log(err.message);
      })
  }

  async updateFriend(userId: string, isFriend: boolean) {
    const colRef = doc(db, 'users', userId);
    await updateDoc(colRef, {
      isFriend: !isFriend
    })
    this.users.length = 0;
    this.getFriends();
  }

  constructor(public service: FriendsService) { }

  async ngOnInit() {
    this.getFriends();
  }

}
