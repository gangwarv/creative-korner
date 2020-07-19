import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}
/*
  * npm uninstall @editorjs/header  @editorjs/image  @editorjs/list  @editorjs/marker  @editorjs/paragraph @editorjs/quote  @editorjs/raw  @editorjs/underline
  */
export const ScriptStore: Scripts[] = [
  { name: 'editorjs', src: 'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest' },
  { name: 'header', src: 'https://cdn.jsdelivr.net/npm/@editorjs/header@2.5.0/dist/bundle.min.js' },
  { name: 'image', src: 'https://cdn.jsdelivr.net/npm/@editorjs/image@2.4.2/dist/bundle.min.js' },
  { name: 'list', src: 'https://cdn.jsdelivr.net/npm/@editorjs/list@1.5.0/dist/bundle.min.js' },
  { name: 'marker', src: 'https://cdn.jsdelivr.net/npm/@editorjs/marker@1.2.2/dist/bundle.min.js' },
  { name: 'paragraph', src: 'https://cdn.jsdelivr.net/npm/@editorjs/paragraph@2.7.0/dist/bundle.min.js' },
  { name: 'quote', src: 'https://cdn.jsdelivr.net/npm/@editorjs/quote@2.3.0/dist/bundle.min.js' },
  { name: 'raw', src: 'https://cdn.jsdelivr.net/npm/@editorjs/raw@2.1.2/dist/bundle.min.js' },
  { name: 'underline', src: 'https://cdn.jsdelivr.net/npm/@editorjs/underline@1.0.0/dist/bundle.min.js' }
];

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  private scripts: any = {};
  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
    console.log(this.scripts)
  }

  loadEditorScripts() {
    const promises: any[] = [];
    const scripts = this.scripts;

    for (let key in scripts){
      promises.push(this.loadScript(key))
    }

    return Promise.all(promises);
  }
  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
