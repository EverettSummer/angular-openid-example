import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterOutlet, AuthModule.forRoot({
    config: {
      authority: 'http://127.0.0.1:4444',
      redirectUrl: 'http://localhost:4200',
      postLogoutRedirectUri: window.location.origin,
      clientId: 'c117b407-a075-4d56-91ad-96dbba56e832',
      scope: 'openid offline_access offline',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      logLevel: LogLevel.Debug
    }
  }),
  BrowserModule,
  RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {

}
