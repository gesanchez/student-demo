import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Scenes
 */
import { RegisterComponent } from './scenes/register/register.component';

const routes: Routes = [{
  path: 'registro',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
