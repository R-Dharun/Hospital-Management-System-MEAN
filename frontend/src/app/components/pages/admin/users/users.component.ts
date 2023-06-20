
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { this.getAllUsers();}


  UserArray : any[] = [];
 
  getAllUsers() {

    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.UserArray = resultData.data;
    });


  }


















  ngOnInit(): void {

    
  }




}
