import { sweetAlert } from 'src/app/@core/helper';
import { RulesSweetAlert } from './../@core/model/global-swal-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username!: string;
  password: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onsubmit(): any{
    let validation = false;
    let text = '';

    if (!this.username){
      validation = true;
      text = 'username harus diisi';
    }else if (!this.password){
      validation = true;
      text = 'Password harus diisi';
    }
    if (validation){
      const rulesAlert: RulesSweetAlert = {
        title: 'Failed',
        text,
        icon: 'error',
        showCancelButton: false
    };
      sweetAlert(rulesAlert);
      return;
    }
    this.authService.login(this.username, this.password).subscribe(
      data => {
        // localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.id_token);
        this.router.navigate(['dashboard']);
      }
    );
  }
}

