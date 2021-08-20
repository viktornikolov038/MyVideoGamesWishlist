import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLogged=false;
  constructor(public firebaseAuth: AngularFireAuth) { }
  async signin(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.isLogged=true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  async signup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isLogged=true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  async logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
    };
  }

