import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MultiplierPipe } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ProfileComponent } from './custom-component/profile/profile.component';
import { ZoomDirective } from './custom-component/directives/zoom.directive';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    ProfileComponent,
    ZoomDirective,
    HeaderComponent,
    MultiplierPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
