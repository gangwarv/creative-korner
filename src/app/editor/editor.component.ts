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
  data: OutputData = {
    time: 1592584304450,
    blocks: [
      { type: 'header', data: { text: 'Usage', level: 2 } },
      {
        type: 'paragraph',
        data: {
          text:
            'Add a new Tool to the tools property of the Editor.js initial config.. Add a new Tool to the&nbsp;tools&nbsp;property of the Editor.js initial config.',
        },
      },
      {
        type: 'paragraph',
        data: {
          text: ` We have created a fictional band website. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
      },
      { type: 'header', data: { text: 'Few Steps', level: 2 } },
      {
        type: 'paragraph',
        data: {
          text:
            'Add a new Tool to the tools property of the Editor.js initial config.. Add a new Tool to the&nbsp;tools&nbsp;property of the Editor.js initial config.',
        },
      },
    ],
    version: '2.18.0',
  };

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
        outputData.blocks.forEach(k=>{
          k.type;
          k.data
        })
        this.data = outputData;
        console.log('Article data: ', outputData, JSON.stringify(outputData));
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
}
