import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { CKEditorModule, } from 'ckeditor4-angular'
import { FormsModule } from '@angular/forms';
// import { EditorComponent } from '../editor/editor.component';
import { CdnEditorComponent } from '../cdn-editor/cdn-editor.component'


@NgModule({
  declarations: [EditComponent,
    //  EditorComponent, 
    CdnEditorComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    CKEditorModule
  ]
})
export class EditModule { }
