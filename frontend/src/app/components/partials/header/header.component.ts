import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartQuantity=0;
  user!:User;
  


  constructor(cartService:CartService, private userService:UserService,private router:Router) {
 
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }
   
   gotocontactus(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotodoctor(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotofin(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotoadmin(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotorecp(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotoaboutus(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotohome(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotorec(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }

   ngOnInit(): void {

   }
 
   logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
