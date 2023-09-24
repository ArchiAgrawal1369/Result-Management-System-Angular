import { Component, OnInit } from '@angular/core';
import { ResultManagementService} from '../result-management.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ResultManagement:ResultManagementService){}
  collection:any=[];
  ngOnInit(): void{
    this.ResultManagement.getList().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
deleteDetail(item){
  this.collection.splice(item-1,1);
  this.ResultManagement.deleteDetail(item).subscribe((result)=>{
    console.warn("result",result)
  })
}
logout(){
  this.ResultManagement.logout();
}

}
