import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";


const app = initializeApp(environment.firebaseConfig);
const auth = getAuth();


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor() { }



  //! FIREBASE AUTH


  //? LOGIN WITH EMAIL AND PASSWORD
  loginWithEmail = async(email:string,password:string)=>{
  //  try{

  //  } catch(e:any){
  //   return e.message;
  //  }

  let res = await signInWithEmailAndPassword (auth,email, password)
  return res;
  }
}
