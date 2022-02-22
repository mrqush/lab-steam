import { Game } from "../types/game.type";

export class CartService {
  public gamesInLibrary: Array<Game> = []

  public addToLibrary(game: Game): void {
    if(this.gamesInLibrary.indexOf(game) === -1) {
      this.gamesInLibrary = [game, ...this.gamesInLibrary]
    } else {
      return
    }
  }
  public removeFromLibrary(game: Game): void {
    this.gamesInLibrary = this.gamesInLibrary.filter(item => item !== game);
  }
  constructor() { }
}
