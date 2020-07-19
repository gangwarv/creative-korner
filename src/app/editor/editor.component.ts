import { Component, OnInit } from '@angular/core';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Marker from '@editorjs/marker';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Underline from '@editorjs/underline';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  private editor: any;


  constructor() {}

  ngOnInit(): void { 
    this.editor = new EditorJS({
      data: this.data,
      /**
       * Id of Element that should contain the Editor
       */

      holder: 'editorjs',

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */

      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link'],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            },
          },
        },
        raw: Raw,
        quote: Quote,
        underline: Underline,
      },
    });
  }
  onSave() {
    this.editor
      .save()
      .then((outputData) => {
        // outputData.blocks.forEach(k=>{
        //   k.type;
        //   k.data
        // })
        this.data = outputData;
        console.log('Article data: ', outputData, JSON.stringify(outputData));
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
}
