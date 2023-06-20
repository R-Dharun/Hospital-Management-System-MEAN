import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  date!: string;

  UserArray: any[] = [];
  currentUserID = "";

  name: string = "";
  email: string = "";
  address: string = "";
  phone: string = "";

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }
  getAllUsers() {

    this.http.get("http://localhost:8000/booking/getAll")
      .subscribe((resultData: any) => {

        console.log(resultData);
        this.UserArray = resultData.data;
      });
  }
  save() {
    if (this.currentUserID == '') {
      this.register();
    }
    else {

    }

  }

  register() {

    let bodyData = {
      "name": this.name,
      "email": this.email,
      "date": this.date,
      "address": this.address,
      "phone": this.phone,
    };
    this.http.post("http://localhost:8000/booking/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("User Registered Successfully")
   
      this.name = '';
      this.email = '';
      this.date = '';
      this.address = '';
      this.phone = '';
      this.getAllUsers();
    });
  }
}

