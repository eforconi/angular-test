import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResultModel } from '../../models/Loguin.model';
import { Observable } from 'rxjs';
import { User } from '../../models/User.model';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  API_URL  =  'http://localhost:3000';
  constructor(private  httpClient:  HttpClient) { }
  private modals: any[] = [];

  login():any{
    return this.httpClient.get(`${this.API_URL}/login`);
  }
  
  logOut(){
    localStorage.removeItem('currentUser');
    window.location.reload();
  }

  setUser(user): void {
    localStorage.setItem('currentUser', user);
  }

  isLogged() {
    if (localStorage.getItem('currentUser'))
      return true;
  }

  register(user: User) {
    return this.httpClient.post(`${this.API_URL}/login`, user);
}

}
