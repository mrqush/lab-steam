import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { CartService } from '../services/cart.service';

initializeApp(environment.firebase);
const db = getFirestore();

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Array<any> = [];
  inputValue: string = '';
  showLoader: boolean = false;
  rangeValue: number = 500;

  search(e: any, data: string) {
    e.stopPropagation();
    e.preventDefault();

    let reg = new RegExp(data.trim());
    if (data.trim() === '') {
      this.getGames();
      return
    }

    this.games = this.games.filter(item => {
      if (item.name.search(reg) != -1) {
        return true
      }
      return false
    });
  }

  async getGames() {
    this.games.length = 0;
    const colRef = collection(db, 'games');
    this.showLoader = true;
    return getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.games.push({ ...doc.data(), gameId: doc.id });
        })
        this.showLoader = false;
      })
      .catch(err => {
        this.showLoader = false;
        console.log(err.message);
      })
  }

  async applyFilters() {
    await this.getGames();
    this.games = this.games.filter(item => item.price <= this.rangeValue);
  }

  constructor(public service: CartService) { }

  ngOnInit(): void {
    this.getGames();
  }

}
