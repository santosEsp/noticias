import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent},
  { path: 'inicio', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
