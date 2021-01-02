import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from './course';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.retrieveById();
  }

  retrieveById(): void {
    this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: course => this.course = course,
      error: err => console.log(err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe();
  }
}
