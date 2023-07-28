import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatProgressBarModule} from '@angular/material/progress-bar'

import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapLinkedin,
  bootstrapUpload
} from '@ng-icons/bootstrap-icons';

import {ClipboardModule} from "@angular/cdk/clipboard";

import { HttpClientModule } from '@angular/common/http';
import { EmailComponentComponent } from './components/email-component/email-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapUpload
    }),
    ClipboardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
