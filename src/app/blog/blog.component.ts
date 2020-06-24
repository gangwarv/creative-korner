import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  showAds = false;
  showSubscription = false;
  blog: Blog = new Blog();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe
    this.route.params.subscribe((params) => {
      this.blog.id = params['id'];
      this.blog.title = 'My First Blog';

      this.blog.content = {
        time: 1592584304450,
        blocks: [
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
      this.blog.creater = {
        name: 'Vishal Gangwar',
        profileUrl:
          'https://lh3.googleusercontent.com/ogw/ADGmqu_ScgMaCc0y9FV2t9pguVquQoykY2n4I54OA7OV=s32-c-mo',
        bio:
          "I'm a professional Software Developer. I love to write Technical content. I love to write Technical content. I love to write Technical content",
      };
      this.blog.comments = [
        {
          user:{
            name: 'Sanjay Singh',
            profileUrl:'https://lh3.googleusercontent.com/ogw/ADGmqu_ScgMaCc0y9FV2t9pguVquQoykY2n4I54OA7OV=s32-c-mo',

          },
          text:`Love your blog page! Simply the best! Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.`,
          createdAt: new Date()
        },
        {
          user:{
            name: 'Manu',
            profileUrl:'https://www.w3schools.com/w3images/girl_train.jpg',

          },
          text:`Love hats!!`,
          createdAt: new Date()
        }
      ]
    });
  }
}

class Blog {
  id: String;
  title: String;
  subTitle: String;
  creater?: IUser;
  content: any;
  metaTitle: String;
  metaDescription: String;
  comments?: Comment[];
}

// class User implements IUser {
//   name: String;
//   profileUrl: String;
//   bio: String;
// }

interface IUser {
  name: String;
  profileUrl: String;
  bio?: String;
}
interface Comment {
  user: IUser;
  text: String;
  createdAt: Date;
}
