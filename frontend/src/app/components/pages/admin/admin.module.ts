import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from 'src/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    HomeComponent,
    UsersComponent,
    AdduserComponent,
    BookComponent

 

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule


    
  ],
  providers:[],
  bootstrap:[AppComponent]
  
})
export class AdminModule { }
