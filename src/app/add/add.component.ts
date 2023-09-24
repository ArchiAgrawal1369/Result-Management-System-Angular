import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResultManagementService } from '../result-management.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert: boolean = false
  addDetail = new FormGroup({
    roll: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl(''),
  })
  collectDetail() {
    //console.warn(this.addDetail.value)
    this.ResultManagement.saveDetail(this.addDetail.value).subscribe((result) => {
      console.warn("result is here", result)
      this.alert = true
      this.addDetail.reset({})
    })
  }
  closeAlert() {
    this.alert = false
  }
  logout() {
    this.ResultManagement.logout();
  }
  constructor(private ResultManagement: ResultManagementService) { }

  ngOnInit() {
  }


}
