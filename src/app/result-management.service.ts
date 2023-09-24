import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResultManagementService {
 url="http://localhost:3000/detail"
newurl="http://localhost:3000/user"

  alert:boolean= false;
  studalert:boolean= false;

  constructor(private http:HttpClient, private router:Router) { }
  getList(){
    return this.http.get(this.url);
  }
  saveDetail(data){
    return this.http.post(this.url,data)
  }
  deleteDetail(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentDetail(id){
    return this.http.get(`${this.url}/${id}`)
   
  }
  updateDetail(id,data){
    return this.http.put(`${this.url}/${id}`,data)
   
  }
  userLogin(data){
    this.http.get(`${this.newurl}?email=${data.email}&password=${data.password}`,
    { observe:'response' }).subscribe((result:any)=>{
      if(result && result.body && result.body.length===1){
        localStorage.setItem('resultmangement',JSON.stringify(result.body))
        this.alert=false;
        this.router.navigate(['list'])
      }else{
        this.alert=true;
        console.warn("login failed")
      }
    })
  }

  studentLogin(data){
    this.http.get(`${this.url}?roll=${data.roll}&name=${data.name}`,
    { observe:'response' }).subscribe((result:any)=>{
      if(result && result.body && result.body.length===1){
        localStorage.setItem('resultmangement',JSON.stringify(result.body))
        this.studalert=false;
        this.router.navigate(['studentview/'+result.body[0].id])
      }else{
        this.studalert=true;
        console.warn("login failed")
      }
    })
  }

  logout(){
    localStorage.removeItem('resultmangement');
    this.router.navigate(['/'])
  }

  closeAlert(){
    this.alert=false;
  }

  studcloseAlert(){
    this.studalert=false;
  }
}
