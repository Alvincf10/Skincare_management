import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { RulesSweetAlert } from 'src/app/@core/model/global-swal-model';
import { sweetAlert } from 'src/app/@core/helper';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login = (username: string, password: string) => {
    const param = {
      username,
      password
    };
    const path = 'authenticate';
    const url = environment.APIURL + path;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '103.161.184.147:7887'
    });
    return this.http.post(url, param, {headers})
    .pipe(
      map((response: any) => {
        return response;
      }),
      catchError((e: Response) => this.handleError(e))
    );
  }

  private handleError = (resp: any) => {
    const errMsg = resp.error.message;
    const rulesAlert: RulesSweetAlert = {
      title: 'Failed',
      text: errMsg,
      icon: 'error',
      showCancelButton: false
      };
    sweetAlert(rulesAlert);
    return throwError(errMsg);
  }

  logOut = () => {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
