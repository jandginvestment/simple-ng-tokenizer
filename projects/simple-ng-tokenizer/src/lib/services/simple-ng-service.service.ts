import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleNgServiceService {

  constructor() { }
  public SetToken(token) {

    localStorage.setItem('jwt-token', token );

  }

  /**
   * RemoveToken
   * to remove the jwt token from the storage
   */
  public RemoveToken() {
    localStorage.removeItem('jwt-token' );
  }
}
