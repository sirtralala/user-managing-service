import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './types';

// const NEWS_RESOURCE_URL = 'http://localhost:8080/resources/user';
const NEWS_RESOURCE_URL = 'https://intense-dusk-98645.herokuapp.com/resources/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private httpClient: HttpClient) {}

  create(user: User): Promise<any> {
    return this.httpClient.post(NEWS_RESOURCE_URL, user).toPromise();
  }

  retrieveAll(): Promise<User[]> {
    return this.httpClient.get<User[]>(NEWS_RESOURCE_URL).toPromise();
  }

  retrieve(id: number): Promise<User> {
    return this.httpClient.get<User>(NEWS_RESOURCE_URL + '/' + id).toPromise();
  }

  update(user: User): Promise<any> {
    return this.httpClient.put(NEWS_RESOURCE_URL + '/' + user.id, user).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(NEWS_RESOURCE_URL + '/' + id).toPromise();
  }
}