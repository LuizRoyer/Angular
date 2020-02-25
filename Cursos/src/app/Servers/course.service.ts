import { Course } from '../Courses/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private coursesUrl: 'http://localhost:3100/api/courses';
    constructor(private httpClient: HttpClient) {

    }

    retriveAllHttp(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retriveByIdHttp(id: Number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    saveHttp(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        } else
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
    }

    deleteByIdHttp(id:Number):Observable<any>{
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }


    retriveAll(): Course[] {
        return ListaCourses;
    }

    retriveById(id: Number): Course {
        return ListaCourses.find((coursesIterator: Course) => coursesIterator.id === id);
    }

    save(course: Course): void {
        if (course.id) {
            const index = ListaCourses.findIndex((courseIteration: Course) => courseIteration.id = course.id);
            ListaCourses[index] = course;           
        }
    }

    deleteById(id:number):void{
        ListaCourses.splice(id, 1);
    }
    
}

var ListaCourses: Course[] = [
    {
        id: 1,
        name: "Angular",
        imageUrl: '/assets/imagens/Angular.png',
        price: 99,
        code: "XPS-8796",
        duration: 120,
        rating: 4.4,
        releaseDate: "01/02/2020",
        description: " Curso Completo"
    }, {
        id: 2,
        name: "JavaScript",
        imageUrl: '/assets/imagens/JavaScript.png',
        price: 89,
        code: "XPS-8296",
        duration: 150,
        rating: 4,
        releaseDate: "01/02/2018",
        description: " Curso Completo"
    }, {
        id: 3,
        name: "Asp net Core",
        imageUrl: '/assets/imagens/NetCore.png',
        price: 100,
        code: "XPS-4296",
        duration: 250,
        rating: 5,
        releaseDate: "01/01/2015",
        description: " Curso Completo"
    },
    {
        id: 4,
        name: "AngularJs",
        imageUrl: '/assets/imagens/Angular.png',
        price: 99,
        code: "XPS-8496",
        duration: 120,
        rating: 2.4,
        releaseDate: "01/02/2020",
        description: " Curso Completo"
    }, {
        id: 5,
        name: "JavaScript ES6",
        imageUrl: '/assets/imagens/JavaScript.png',
        price: 89,
        code: "XPS-8496",
        duration: 150,
        rating: 3.4,
        releaseDate: "01/02/2018",
        description: " Curso Completo"
    }, {
        id: 6,
        name: "C #",
        imageUrl: '/assets/imagens/NetCore.png',
        price: 100,
        code: "XPS-496",
        duration: 250,
        rating: 3.7,
        releaseDate: "01/01/2015",
        description: " Curso Completo"
    }]    