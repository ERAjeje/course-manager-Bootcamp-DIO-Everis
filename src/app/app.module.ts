import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseInfoComponent,
    CourseListComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ReplacePipe,
    StarComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
