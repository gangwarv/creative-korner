import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader.service';

declare let EditorJS, Header, List, Marker, Paragraph, ImageTool, RawTool, Quote, Underline;

@Component({
  selector: 'app-cdn-editor',
  templateUrl: './cdn-editor.component.html',
  styleUrls: ['./cdn-editor.component.scss']
})
export class CdnEditorComponent implements OnInit {
  editor: any;
  @Input() value: any;
  @Output() change = new EventEmitter<any>()

  constructor(public scriptLoader: ScriptLoaderService) {
    scriptLoader.loadEditorScripts().then(_ => {
      this.initializedEditor();
    }).catch(console.log)
  }

  ngOnInit(): void { }

  initializedEditor() {
    this.editor = new EditorJS({
      data:this.value,
      logLevel: 'ERROR',
      holder: 'editorjs',
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
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile(file) {
                let res = { success: 1, file: { url: 'http://localhost/img/' + file.name } };
                console.log('uploading', file)
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve(res)
                  }, 2000);
                });
              }
            }
          },
        },
        raw: RawTool,
        quote: Quote,
        underline: Underline,
      },
      onChange: (s) => {
        console.log('Now I know that Editor\'s content changed!');
        this.editor.save().then(outputData => {
          // console.log(outputData);
          this.change.emit(outputData)
        })
      }
    });
  }
}
