import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/courses';
import { DataCourses } from '../../data/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listCourses',
  templateUrl: './listCourses.component.html',
  styleUrls: ['./listCourses.component.css']
})
export class ListCoursesComponent implements OnInit {

  public cursos:any[];
  idCourse!:number;
  objectSaveSelected: any = []


  constructor(private router: Router, public infoCourses : DataCourses) {
    this.objectSaveSelected = infoCourses.detailsCourses;
    this.cursos = this.infoCourses.courses;
   }

  getCourses(id:number):void{
    console.log('getCourses...', id);
    this.objectSaveSelected = this.cursos[(id-1)].contenido;
    console.log(this.objectSaveSelected);
    this.infoCourses.nombreCursoDetail = this.cursos[(id-1)].nombre;
    this.infoCourses.detailsCourses = this.objectSaveSelected;
    this.router.navigateByUrl('courses/detailsCourses');
  }

  ngOnInit() {
    console.log('Loading courses...');
  }

}
