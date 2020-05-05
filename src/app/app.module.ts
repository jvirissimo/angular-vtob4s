import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/dashboard',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, LoginModule, DashboardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
