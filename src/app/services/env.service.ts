import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://auth.candlefood.com/api/user/';
  constructor() { }
}
