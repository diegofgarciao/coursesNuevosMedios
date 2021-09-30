import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursesComponent } from './listCourses/listCourses.component';
import { DetailCoursesComponent } from './detail-courses/detail-courses.component';

const routes: Routes = [
  { path: '', component: ListCoursesComponent},
  { path: 'detailsCourses', component: DetailCoursesComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
