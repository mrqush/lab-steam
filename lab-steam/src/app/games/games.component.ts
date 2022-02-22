import { Component, OnInit } from '@angular/core';
import { games } from '../data/games'
import { CartService } from '../services/cart.service';
import { Game } from '../types/game.type';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Array<Game> = games;
  inputValue: string = '';

  search(e: any, data: string) {
    e.stopPropagation();
    e.preventDefault();

    let reg = new RegExp(data.trim());
    if (data.trim() === '') {
      this.games = games;
      return
    }

    this.games = games.filter(item => {
      if (item.name.search(reg) != -1) {
        return true
      }
      return false
    });
  }

  constructor(public service: CartService) { }

  ngOnInit(): void {
  }

}
