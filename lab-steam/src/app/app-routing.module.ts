import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component';
import { FriendsComponent } from './friends/friends.component';
import { LibraryComponent } from './library/library.component';
import { LoginGuard } from './guard/login.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'friends',
    component: FriendsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [LoginGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
