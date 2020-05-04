import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, LoginModule, DashboardModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
