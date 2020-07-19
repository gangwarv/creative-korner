import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoriesComponent } from '../my-stories/my-stories.component';

import { MyStoriesRoutingModule } from './my-stories-routing.module';


@NgModule({
  declarations: [MyStoriesComponent],
  imports: [
    CommonModule,
    MyStoriesRoutingModule
  ]
})
export class MyStoriesModule { }
