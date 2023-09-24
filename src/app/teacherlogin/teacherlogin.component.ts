import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import {ResultManagementService} from '../result-management.service';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
  
  teacherloginDetail= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  teacherlogin(){
    this.resultmanagement.userLogin(this.teacherloginDetail.value);
       }


  closeAlert(){
        this.resultmanagement.closeAlert();
      }

  constructor(private resultmanagement:ResultManagementService) { }

  ngOnInit() {
  }

}