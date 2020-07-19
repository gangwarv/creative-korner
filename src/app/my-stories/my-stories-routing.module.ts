import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyStoriesComponent } from './my-stories.component';


const routes: Routes = [{
  path:'',
  component: MyStoriesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoriesRoutingModule { }
