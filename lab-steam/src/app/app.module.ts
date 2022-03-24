import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'

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
import { FirebaseService } from './services/firebase.service';
import { environment } from 'src/environments/environment';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    LoginComponent,
    FriendsComponent,
    GamesComponent,
    LibraryComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [CartService, FriendsService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
