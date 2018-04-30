import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
/**
 * Components
 */
import { RegisterComponent } from './scenes/register/register.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
/**
 * Services
 */
import { RegisterService } from './services/register.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  declarations: [RegisterComponent, RegisterformComponent],
  providers: [
    RegisterService
  ]
})
export class AuthModule { }
