import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  showAds = true;
  showSubscription = false;
  showComments = false;
  blog: Blog;
  relatedBlogs = [
    {
      title: 'How to setup user authentication in MongoDB 4.0',
      id: 'how-to-setup-auth-in-mongodb-3-0-properly',
    },
    {
      title: 'Docker for Node.js in Production',
      id: 'docker-for-nodejs-in-production',
    },
  ];

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(({ id }) => {
      if (id)
        return this.blogService.get(id);
      else
        return of({} as Blog);
    })).subscribe(blog => {
      this.blog = blog;
    })
  }
  toggleComments() {
    this.showComments = !this.showComments;
  }
}

// class Blog {
//   id: String;
//   title: String;
//   category: String;
//   creator?: IUser;
//   content: any;
//   metaTitle: String;
//   metaDescription: String;
//   comments?: Comment[];
// }

// interface IUser {
//   name: String;
//   photoURL: String;
//   bio?: String;

//   socialLinks?: {
//     fb?: String;
//     instagram?: String;
//     twitter?: String;
//     linkedIn?: String;
//   };
// }
// interface Comment {
//   user: IUser;
//   text: String;
//   createdAt: Date;
// }
