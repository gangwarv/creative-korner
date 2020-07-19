import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit.component';
import { AuthGuard } from '../services/auth.guard';
import { CdnEditorComponent } from '../cdn-editor/cdn-editor.component';

const routes: Routes = [{ path: ':id', component: EditComponent },
{  path: '', component: EditComponent },
{ path: 'cdn', component: CdnEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
