import { Component, OnInit } from '@angular/core';
import ClassicEditor from '../../../../CKEditor/ckeditor5-build-classic';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { BehaviorSubject } from 'rxjs';

import page from './page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  data = new BehaviorSubject<string>(page);
  doc: String = page;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('setting');
      // this.html = page;
    }, 2000);
    // ClassicEditor.create(document.querySelector('#editor'),{
    //   // plugins:[ SimpleUploadAdapter],
    //   // plugins:['uploadimage'],
    //   simpleUpload: {
    //     // The URL that the images are uploaded to.
    //     uploadUrl: 'http://localhost:3000/upload',

    // }
    // })
    //   .then((editor) => {
    //     editor.setData(this.data.value)
    //     editor.model.document.on('change:data', (e) => {
    //       this.data.next(editor.getData())
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
}
