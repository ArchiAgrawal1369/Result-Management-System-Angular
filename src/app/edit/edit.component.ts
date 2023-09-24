import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import{ActivatedRoute} from '@angular/router';
import {ResultManagementService} from '../result-management.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  alert:boolean=false
  editDetail= new FormGroup({
    roll: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl(''),
  })
  constructor(private router:ActivatedRoute, private resultmanagement:ResultManagementService) { 
    }
  collection(){
    console.warn(this.editDetail.value)
    this.resultmanagement.updateDetail(this.router.snapshot.params.id, this.editDetail.value).subscribe((result)=>
    console.warn(result))
    this.alert=true
  }
  logout(){
    this.resultmanagement.logout();
  }
  ngOnInit() {
    console.warn(this.router.snapshot.params.id);
    this.resultmanagement.getCurrentDetail(this.router.snapshot.params.id).subscribe((result)=>
    {this.editDetail= new FormGroup({
      roll: new FormControl(result['roll']),
      name: new FormControl(result['name']),
      dob: new FormControl(result['dob']),
      score: new FormControl(result['score']),
    })}
    )
  }
closeAlert(){
  this.alert=false
}
}
