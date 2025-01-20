import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    AppComponent
  ],
  declarations: [
  ],
  providers: []
})
export class AppModule {}
