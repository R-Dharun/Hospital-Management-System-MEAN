import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1,2];
  UserArray : any[] = [];
  currentUserID = "";

  treatment: string ="";
  Drugadministered:string="";
  Bill:string="";
  date: string ="";
  status: string="";
  constructor(private http: HttpClient) {this.getAllUsers(); }

  getAllUsers() {

    this.http.get("http://localhost:8000/bill/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.UserArray = resultData.data;
    });


  }

  setUpdate(data: any) 
  {
   this.treatment = data.treatment;
   this.Drugadministered=data.Drugadministered;
   this.Bill=data.Bill;
   this.date = data.date;
   this.status = data.status;
   this.currentUserID = data._id;
  
  }

  UpdateRecords()
  {
    let bodyData = {
      "treatment" : this.treatment,
      "Drugadministered":this.Drugadministered,
      "Bill":this.Bill,
      "date" : this.date,
      "status" : this.status, 

    };
    
    this.http.patch("http://localhost:8000/bill/update"+ "/"+this.currentUserID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Bill Updated")
        this.getAllUsers();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/bill/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Bill Deleted")
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
      "treatment" : this.treatment,
      "Drugadministered":this.Drugadministered,
      "Bill":this.Bill,
      "date" : this.date,
      "status" : this.status,
     
  };
    this.http.post("http://localhost:8000/bill/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Bill Registered Successfully")
       
        this.treatment = '';
        this.Drugadministered='';
        this.Bill='';
        this.date = '';
        this.status = '';
      
        this.getAllUsers();
    });
  }


  ngOnInit(): void {
  }

}
