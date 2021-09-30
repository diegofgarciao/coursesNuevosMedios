import { Component, OnInit } from '@angular/core';
import { DataCourses } from '../../data/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-courses',
  templateUrl: './detail-courses.component.html',
  styleUrls: ['./detail-courses.component.css']
})
export class DetailCoursesComponent implements OnInit {

  public contenidos:any[];
  nameDetail = '';

  constructor(private router: Router, public infoCourses : DataCourses) {
    this.contenidos = infoCourses.detailsCourses;
    this.nameDetail = infoCourses.nombreCursoDetail;
    console.log(this.contenidos);
  }

  ngOnInit() {
    console.log('detailsCourses loading...')
  }

}
