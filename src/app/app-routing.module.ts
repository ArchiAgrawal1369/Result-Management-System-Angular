import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {TeacherloginComponent} from './teacherlogin/teacherlogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { HomeComponent } from './home/home.component';
import {StudentviewComponent} from './studentview/studentview.component'

const routes: Routes = [
  {
    component:AddComponent, path:'add'
  },
  {
    component:ListComponent, path:'list'
  },
  {
    component:EditComponent, path:'edit/:id'
  },
  {
    component:TeacherloginComponent, path:'teacherlogin'
  },
  {
    component:StudentloginComponent, path:'studentlogin'
  },
  {
    component:HomeComponent, path:''
  },
  {
    component:StudentviewComponent, path:'studentview/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
