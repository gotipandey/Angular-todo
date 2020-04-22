import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IncreamentNumberComponent } from './increament-number/increament-number.component';
import { HobbyComponent } from './hobby/hobby.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'assignment1', component: IncreamentNumberComponent},
    { path: 'assignment2', component: HobbyComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
