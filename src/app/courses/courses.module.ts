import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './listCourses/listCourses.component';
import { FormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { DataCourses } from '../data/data';
import { DetailCoursesComponent } from './detail-courses/detail-courses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ],
  declarations: [ListCoursesComponent, DetailCoursesComponent],
  providers:[DataCourses]
})
export class CoursesModule { }
