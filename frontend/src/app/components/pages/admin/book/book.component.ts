import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  p: number = 1;
  UserArray : any[] = [];
  collection: any[] = [1,2];

 
  currentUserID = "";

  name: string ="";
  email:string="";
  password:string="";
  address: string ="";
  phone: string ="";
 
 
  constructor(private http: HttpClient) { this.getAllUsers(); }

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


