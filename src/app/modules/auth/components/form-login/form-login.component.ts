import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/states/app.state';
import { LogIn } from '../../../../store/actions/auth.action';
import { AuthService } from '../../../../core/services/auth.service';
import { ILogin } from '../../../../core/interfaces/ilogin';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  loginForm!: FormGroup;
  error = false;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }
  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const data = {
        data: this.loginForm.value,
      };
      this.authService.login(data).subscribe(
        (dataLogin: ILogin) => {
          this.store.dispatch(LogIn({ payload: dataLogin }));
          this.router.navigateByUrl('/');
        },
        (error) => {
          this.error = true;
          this.snackBar.open('Something went wrong', 'Get it', {
            duration: 2000,
          });
        }
      );
    }
  }
}
