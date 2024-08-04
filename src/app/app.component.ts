import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule, LoginResponse, LogLevel, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-openid-example';
  constructor(
    private oidcSecurityService: OidcSecurityService
  ) {
  }

  public ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
        console.log(loginResponse);
      })
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }

}
