import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/ilogin';
import { IDataLogin } from '../interfaces/idata-login';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private path = environment.BASE_URL;
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router
  ) {}
  login(formData: IDataLogin): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.path}v1/users/login`, formData).pipe(
      tap((response) => {
        this.storage.saveToken(response.data.token);
      })
    );
  }
  logout(): void {
    this.storage.deleteToken();
    this.router.navigateByUrl('/login');
  }
  isLogged(): boolean {
    const token = this.storage.getToken();
    if (!token) {
      return false;
    }
    return !new JwtHelperService().isTokenExpired(token as string);
  }
}
