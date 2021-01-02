import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../shared/pipes/replace/replace.pipe';
import { StarComponent } from '../shared/components/star/star.component';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    CourseInfoComponent,
    CourseListComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}
