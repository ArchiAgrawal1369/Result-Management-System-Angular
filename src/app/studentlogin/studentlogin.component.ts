import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import {ResultManagementService} from '../result-management.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  studentloginDetail= new FormGroup({
    roll: new FormControl(''),
    name: new FormControl('')
  })

  studentlogin(){
    this.resultmanagement.studentLogin(this.studentloginDetail.value);
       }

  studcloseAlert(){
    this.resultmanagement.studcloseAlert();
      }
  constructor(private resultmanagement:ResultManagementService) { }

  ngOnInit() {
  }

}
