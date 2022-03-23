import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserInfo } from '../models/UserInfo';
import { map, Observable } from 'rxjs';
import { TokenInfo } from '../models/TokenInfo';

@Injectable()
export class UserService {
  private url = 'http://localhost:6436/api/Login'
  constructor(private _http: HttpClient) { }

  public authenticateUser(user: UserInfo): Observable<TokenInfo> {
    return this._http.post(this.url, user).pipe(map(resp => <TokenInfo>resp));
  }
}