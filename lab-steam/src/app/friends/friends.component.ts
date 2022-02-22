import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { User } from '../types/user.type';
import { users } from '../data/friends'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users: Array<User> = users

  searchFriend(e: any, data: string) {
    e.stopPropagation();
    e.preventDefault();

    let reg = new RegExp(data.trim());
    if (data.trim() === '') {
      this.users = users;
      return
    }

    this.users = users.filter(item => {
      if (item.name.search(reg) != -1) {
        return true
      }
      return false
    });
  }

  constructor(public service: FriendsService) { }

  ngOnInit(): void {
  }

}
