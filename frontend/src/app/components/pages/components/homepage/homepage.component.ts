import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { RegisterPageComponent} from '../../register-page/register-page.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  constructor( private router:Router) { }
  close = false;

  gotosignup(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotohome(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotoaboutus(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
  gotocontactus(pageName:string):void{
    this.router.navigate([`${pageName}`]); 

  }
 
  ngOnInit(): void 
  {
    setTimeout(()=>
    {
      this.close = true;
    },3)
  }


  showLogin(){

  this.close=!this.close;
  }
  showSignup(){

    this.close=!this.close;
    }

  // onSubmit()
  // {

  //   this.authService.signIn(this.form.value).subscribe((res)=>{

  //     if(res.message === 'wrong password'){

  //       console.log('wrong try again');


  //     }else if(res.message = 'not found'){

  //       console.log('user not found try to login')
  //     }
      
  //     if (res.user.role === 'patient') {
  //       localStorage.setItem('token', res.token);
  //       localStorage.setItem('user', JSON.stringify(res.user));

  //       this.router.navigate(['/patient']);
  //     } else if (res.user.role === 'finance') {
  //       localStorage.setItem('token', res.token);
  //       localStorage.setItem('user', JSON.stringify(res.user));

  //       this.router.navigate(['/finance']);}
      
  //       else if (res.user.role === 'reception') {
  //         localStorage.setItem('token', res.token);
  //         localStorage.setItem('user', JSON.stringify(res.user));
  
  //         this.router.navigate(['/reception']);}
      
  //     else if (res.user.role === 'admin') {
  //       localStorage.setItem('token', res.token);
  //       localStorage.setItem('user', JSON.stringify(res.user));

  //       this.router.navigate(['/admin']);
  //     } else if (res.message === 'wrong password') {
  //       console.log(res.message);
  //     } else {
  //       this.router.navigate(['/auth/login']);
  //     }

  //     if (res.message) {
  //       console.log('wrong password');
  //     }
     


  //   })

  // }
  
  
  // signupAction()
  // {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width = "550px";
  //   this.dialog.open(SignupComponent,dialogConfig);
  // }

}
