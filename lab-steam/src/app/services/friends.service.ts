import { User } from "../types/user.type";

export class FriendsService {
  public friends: Array<User> = []

  // public addFriend(user: User): void {
  //   if (this.friends.indexOf(user) === -1) {
  //     this.friends = [user, ...this.friends]
  //   } else {
  //     return
  //   }
  // }

  public actionFriend(user: User): void {
    user.isFriend = !user.isFriend
  }

  // public removeFriend(user: User): void {
  //   this.friends = this.friends.filter(item => item !== user);
  // }

  public friendCheck(user: User): string {
    if (user.isFriend) {
      return 'Add friend'
    } else {
      return 'Remove friend'
    }
  }
  constructor() { }
}
