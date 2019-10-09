import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './custom-component/profile/profile.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';


const routes: Routes = [
  { path: '', component: CustomComponentComponent},
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
