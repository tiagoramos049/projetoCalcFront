import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  submitForm() {
    const body = { username: this.username, password: this.password };
    this.http.post<any>('https://localhost:44323/v1/account/login', body)
      .subscribe({
        next: response => {
          // Login bem-sucedido
          localStorage.setItem('token', response.token);
          this.router.navigate(['/calcular']);
        },
        error: error => {
          // Verificar o código de erro e exibir mensagem apropriada
          if (error.status === 401 || error.status === 403) {
            this.errorMessage = "Usuário e senha inválidos";
          } else {
            this.errorMessage = "Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.";
          }
        }
      });
  }
}