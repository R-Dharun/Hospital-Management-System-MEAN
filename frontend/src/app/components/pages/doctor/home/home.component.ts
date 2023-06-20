import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/Patient';
import { PatientService } from 'src/app/services/patient.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { DiagnosisService } from 'src/app/services/diagnosis.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  PatientArray : any[] = [];
  collection: any[] = [1,2];
  patient_email!:string;
  patients$!:Observable<Patient[]>;
  close:boolean=false;
  constructor(private patientService:PatientService,private diagnosiService: DiagnosisService,private http: HttpClient) { this.getAllUsers();}
  form!:FormGroup;

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
  
 
  
  ngOnInit(): void {

  }

 

  




  

}
