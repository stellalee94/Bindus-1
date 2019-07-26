import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component'; 
import { AuthService } from './auth.service';
import { LogInComponent } from './log-in/log-in.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateContentsComponent } from './create-contents/create-contents.component';
import { ShowBoardComponent } from './show-board/show-board.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LogInComponent,
    NavBarComponent,
    CreateContentsComponent,
    ShowBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
