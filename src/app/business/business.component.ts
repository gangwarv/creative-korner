import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  EditorJS: any
  constructor() { }

  ngOnInit(): void {
    // let EditorJS = (window as any).EditorJS;
    // console.log('ejs',EditorJS);
    // var editor = new EditorJS('editorjs');
  }

}
