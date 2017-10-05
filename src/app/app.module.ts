import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
// import 'hammerjs';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SettingComponent } from './component/setting/setting.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { DataService } from './service/data.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AbbrNumberPipe } from './abbr-number.pipe';
import { ZoomDirective } from './directive/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    SettingComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AbbrNumberPipe,
    ZoomDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    // MdButtonModule,
    // MdMenuModule,
    // MdCardModule,
    // MdToolbarModule,
    // MdIconModule,
     Ng2SmartTableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'setting', component: SettingComponent },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
