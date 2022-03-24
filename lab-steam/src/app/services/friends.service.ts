export class FriendsService {

  public actionFriend(user: any): void {
    user.isFriend = !user.isFriend
  }

  public friendCheck(user: any): string {
    if (!user.isFriend) {
      return 'Add friend'
    } else {
      return 'Remove friend'
    }
  }
  constructor() { }
}
