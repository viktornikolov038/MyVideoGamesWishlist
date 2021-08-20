import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAFF2epw9QHNAPlg_23SXdYKq0cUfn_bmI",
        authDomain: "myvideogameswishlist.firebaseapp.com",
        projectId: "myvideogameswishlist",
        storageBucket: "myvideogameswishlist.appspot.com",
        messagingSenderId: "562445898083",
        appId: "1:562445898083:web:adacdc198d4afd12c88356"
      }
    )
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
