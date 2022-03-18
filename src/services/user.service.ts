import { UserEntity } from '../app/models/userEntity';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<UserEntity> {
    return this.http.get<UserEntity>(environment.baseUrl + id);
  };

  createUser(user: UserEntity): Observable<UserEntity> {
    return this.http.post<UserEntity>(environment.baseUrl, user);
  };

  updateUser(id:number, value: any): Observable<Object> {
    return this.http.put(environment.baseUrl + id, value);
  };

  getAllUser(): Observable<UserEntity[]> {
    return this.http.get<UserEntity[]>(environment.baseUrl);
  };

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(environment.baseUrl + id);
  };

}
