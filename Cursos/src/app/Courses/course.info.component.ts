import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from '../servers/course.service';

@Component({
    templateUrl:'./course.info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course:Course;

    constructor(private route:ActivatedRoute, private courseService:CourseService){}
    ngOnInit():void{
        this.course = this.courseService.retriveById(parseInt(this.route.snapshot.paramMap.get('id')));
    }

    save():void{       
        this.courseService.save(this.course)
    }
    SaveHttp():void{
        this.courseService.saveHttp(this.course).subscribe({
            next: course =>console.log("saved with sucess",course),
            error:err =>console.log("error",err)
        });
    }
}