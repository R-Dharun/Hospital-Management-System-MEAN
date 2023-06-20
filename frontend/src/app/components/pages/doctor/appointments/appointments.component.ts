import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  p: number = 1;
  UserArray : any[] = [];
  collection: any[] = [1,2];

 
  currentUserID = "";

  name: string ="";
  email:string="";
  password:string="";
  address: string ="";
  phone: string ="";
 
 
 
  constructor(private appointmentService:AppointmentService,private http: HttpClient) { this.getAllUsers(); }



  getAllUsers() {

    this.http.get("http://localhost:8000/booking/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.UserArray = resultData.data;
    });


  }


  ngOnInit(): void {
  }


}
