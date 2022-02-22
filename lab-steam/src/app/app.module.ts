import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { AppRoutingModule } from './app-routing.module';
import { CartService } from './services/cart.service';
import { FriendsService } from './services/friends.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    LoginComponent,
    FriendsComponent,
    GamesComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CartService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
