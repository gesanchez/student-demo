import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  /**
   * @function register
   * @description Funcion para registrar un usuario
   */
  public register(): void {
    const obj = {
      nombre: '',
      email: ''
    };
    this.http.post(environment.url_api + '/registro', obj).subscribe();
  }

}
