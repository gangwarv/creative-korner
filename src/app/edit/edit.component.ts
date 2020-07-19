import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model'
import { BehaviorSubject, of } from 'rxjs';
import { data } from '../data';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  data = new BehaviorSubject<any>(null);
  autoId = false;
  post: Blog = {
    id: 'my-first-blog',
    title: 'Blog Title',
    content: data,
    category:'tech'
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(({ id }) => {
      if (id)
        return of(this.post as Blog)
      else
        return of({} as Blog);
    })).subscribe(blog => {
      this.data.next(blog);
    })

  }
  onContentChange(e) {
    this.post.content = e;
  }
  saveBlog() {
    if(!this.post.id)
    this.post.id = this.post.title.toLowerCase().split(' ').join('-');
    
    this.blogService.update(this.post).then(_ => {
      console.log('Success')
    })
    .catch(err=>{
      console.log(err)
    })
  }
  onTitleChange(e){
    
  }
}
