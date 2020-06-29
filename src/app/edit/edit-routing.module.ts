import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit.component';
import { EditorComponent } from '../editor/editor.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [{ path: '', component: EditComponent },
 { path: 'editor', component: EditorComponent, canActivate: [] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
