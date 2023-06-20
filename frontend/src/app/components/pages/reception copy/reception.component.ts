import { Component, OnInit } from '@angular/core';
import { faAd, faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PatientService } from '../../../services/patient.service';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/Patient';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent {

  constructor(private patientService:PatientService,private http: HttpClient) { this.getAllUsers();}
  

  
  PatientArray : any[] = [];
  currentUserID = "";

  name: string ="";
  phone:string=""
  location:string="";
  roomadmitted:string="";
  admissionno:string="";
  status: string ="";
  diagonosis: string ="";
  getAllUsers() {

    this.http.get("http://localhost:8000/reception/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.PatientArray = resultData.data;
    });
  }
  setUpdate(data: any) 
  {
   this.name = data.name;
   this.phone=data.phone;
   this.location=data.location;
   this.roomadmitted= data.roomadmitted;
   this.admissionno = data.admissionno;
   this.status = data.status;
   this.diagonosis= data.diagonosis;
   this.currentUserID = data._id;
  
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "phone":this.phone,
      "location":this.location,
      "roomadmitted" : this.roomadmitted,
      "admissionno" : this.admissionno,
      "status" : this.status,
      "diagonosis" : this.diagonosis,

    };
    
    this.http.patch("http://localhost:8000/reception/update"+ "/"+this.currentUserID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Updateddd")
        this.getAllUsers();
      
    });
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8000/reception/delete"+ "/"+ data._id).subscribe((resultData: any)=>
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
      "phone":this.phone,
      "location":this.location,
      "roomadmitted" : this.roomadmitted,
      "admissionno" : this.admissionno,
      "status" : this.status,
      "diagonosis" : this.diagonosis,
  };
    this.http.post("http://localhost:8000/reception/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.phone='';
        this.location='';
        this.roomadmitted='';
        this.admissionno = '';
        this.status  = '';
        this.diagonosis='';
        this.getAllUsers();
    });
  }


}


 


