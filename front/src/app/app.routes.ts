import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Skills } from './pages/skills/skills';
import { ExchangeRequests } from './pages/exchange-requests/exchange-requests';
import { Reviews } from './pages/reviews/reviews';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: Register },

  { path: 'profile', component: Profile },

  { path: 'skills', component: Skills },

  { path: 'exchange', component: ExchangeRequests },

  { path: 'reviews', component: Reviews },

  { path: '**', component: NotFound }
];
