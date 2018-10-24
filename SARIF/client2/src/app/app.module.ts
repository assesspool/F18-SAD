import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddUserComponent } from './add-user/add-user.component';
//import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserLogComponent } from './user-log/user-log.component';
import { AddUserLoginComponent } from './add-user-login/add-user-login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { JournalizeComponent } from './journalize/journalize.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    UserPageComponent,
    AddUserComponent,
   // UserDetailsComponent,
    LoginHomeComponent,
    ChartOfAccountsComponent,
    ResetPasswordComponent,
    UserLogComponent,
    AddUserLoginComponent,
    HomeScreenComponent,
    JournalizeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2Webstorage,
    HttpClientModule,
    MyDatePickerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
