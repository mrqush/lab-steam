import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getDatabase, ref, child, get, update } from "firebase/database";

initializeApp(environment.firebase);
const dbRef = ref(getDatabase());

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  loading: boolean = false;

  getUserData() {
    this.loading = true;
    get(child(dbRef, `user`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.user = snapshot.val();
        this.loading = false;
      } else {
        this.loading = false;
        console.log("No data available");
      }
    }).catch((error) => {
      this.loading = false;
      console.error(error);
    });
  }

  updateUserData(username: string, email: string, age: string) {
    this.loading = true;
    const newUser = {
      username: username,
      email: email,
      age: age
    }
    const updates: any = {};
    updates['/user/'] = newUser;
    update(dbRef, updates);
    this.loading = false;
    return
  }
  constructor() { }

  ngOnInit(): void {
    this.getUserData();
  }

}
