import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseListComponent } from './Courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './Pipe/replace.pipe';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './404/Error404.component';
import { CourseInfoComponent } from './Courses/course.info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
      {path:'**',component:Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
