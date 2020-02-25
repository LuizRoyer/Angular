import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from '../Servers/course.service';

@Component({

  templateUrl: './course-list.component.html'

})

export class CourseListComponent implements OnInit {

  _courses: Course[] = [];
  filterCurse: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.retriveAll();
    this.filterCurse = this.courseService.retriveAll();

  }

  retrieveAll(): void {
    this.courseService.retriveAllHttp().subscribe({
      next: course => {
        this._courses = course;
        this.filterCurse = this._courses;
      }, error: err => console.log('Erro', err)
    });
  }

  deleteByIdHttp(courseId: number): void {
    this.courseService.deleteByIdHttp(courseId).subscribe({
      next: () => { console.log("Deleed with sucess"); this.retrieveAll(); },
      error: err => console.log("error", err)
    });
  }

  deleteById(courseid:number):void{
    this.courseService.deleteById(courseid);
  this.retrieveAll();
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filterCurse = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

  get filter() {
    return this._filterBy
  }
}