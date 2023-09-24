import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResultManagementService } from '../result-management.service'

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  viewDetail = new FormGroup({
    roll: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl(''),
  })
  constructor(private router: ActivatedRoute, private resultmanagement: ResultManagementService) { }
  logout() {
    this.resultmanagement.logout();
  }
  ngOnInit() {
    console.warn(this.router.snapshot.params.id);
    this.resultmanagement.getCurrentDetail(this.router.snapshot.params.id).subscribe((result) => {
      this.viewDetail = new FormGroup({
        roll: new FormControl(result['roll']),
        name: new FormControl(result['name']),
        dob: new FormControl(result['dob']),
        score: new FormControl(result['score']),
      })
    }
    )
  }

}
