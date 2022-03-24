export class CartService {
  public gamesInLibrary: Array<any> = [];
  showNotification: boolean = false;
  notificationText: string = '';
  notificationStatus: string = 'default';

  public addToLibrary(game: any): void {
    if (this.gamesInLibrary.indexOf(game) === -1) {
      this.notificationText = 'Game added to library';
      this.notificationStatus = 'success';
      this.showNotification = true;
      this.gamesInLibrary = [game, ...this.gamesInLibrary];
      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    } else {
      return
    }
  }
  public removeFromLibrary(game: any): void {
    this.notificationText = 'Game removed from library';
    this.notificationStatus = 'success';
    this.showNotification = true;
    this.gamesInLibrary = this.gamesInLibrary.filter(item => item !== game);
    setTimeout(() => {
      this.showNotification = false;
    }, 2000);
  }
  constructor() { }
}
