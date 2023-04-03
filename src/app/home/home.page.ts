import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage implements OnInit {

  username!:string;
  password!:string;


  constructor(private fire:FireService, private toast:ToastController, private nav:NavController) {}


  async ngOnInit() {
    
  }

  login =async()=>{
    let res = await  this.fire.loginWithEmail(this.username+'@tangent.com', this.password)
    console.log(res.user)
    if(res.user) this.nav.navigateRoot('/dashboard')
    else await this.toastMsg('username or password must be incorrect')
    // if(res) this.nav.navigateRoot('/dashboard')

  }


  toastMsg =async(msg:string)=>{
    let toast = await this.toast.create({
      message: msg,
      color:'danger',
      duration:2500,
      position:'bottom'
    })

    await toast.present()
  }
}
