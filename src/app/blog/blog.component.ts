import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: Blog = new Blog();
  user: User = {
    fullName: 'Vishal Gangwar',
    bio:
      "I'm a professional Software Developer. I love to write Technical content. I love to write Technical content. I love to write Technical content",
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.blog.blogId = params['id'];
      this.blog.title = this.blog.blogId;
      this.blog.content = {
        time: 1592584304450,
        blocks: [
          { type: 'header', data: { text: 'My Blog Title', level: 2 } },
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
    });
  }
}

class Blog {
  blogId: String;
  title: String;
  content: any;
  metaTitle: String;
  metaDescription: String;
}

class User {
  fullName: String;
  bio: String;
}
