import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-studentcrud',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],

})
export class AdduserComponent 
{


  UserArray : any[] = [];
  currentUserID = "";

  name: string ="";
  email:string="";
  password:string="";
  address: string ="";
  
  
  constructor(private http: HttpClient ) 
  {
    this.getAllUsers();
  }
  getAllUsers() {

    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.UserArray = resultData.data;
    });


  }

  setUpdate(data: any) 
  {
   this.name = data.name;
   this.email=data.email;
   this.password=data.password;
   this.address = data.address;
   

   this.currentUserID = data._id;
  
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "email":this.email,
      "password":this.password,
      "address" : this.address,
   

    };
    
    this.http.patch("http://localhost:8000/user/update"+ "/"+this.currentUserID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Updateddd")
        this.getAllUsers();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Deletedddd")
        this.getAllUsers();
   
    });
    }
    
  save()
  {
    if(this.currentUserID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }

register()
  {

    let bodyData = {
      "name" : this.name,
      "email":this.email,
      "password":this.email,
      "address" : this.address,
     
  };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.email='';
        this.password='';
        this.address = '';
      
        this.getAllUsers();
    });
  }
}