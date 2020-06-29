import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog.model';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe
    this.route.params.subscribe((params) => {
      this.blog = {
        id: params['id'],
        title:
          'How to Use the Psychology of Color to Increase Website Conversions and Popularity',
        category: 'tech',

        content: {
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
                  'Add a new Tool to the tools property of the Editor.js initial config.. Add a new Tool to the&nbsp,tools&nbsp,property of the Editor.js initial config.',
              },
            },
          ],
          version: '2.18.0',
        },
        creator: {
          socialLinks: {
            fb: '#',
            instagram: '#',
            // twitter: '#',
            linkedIn: '#',
          },
          uid: 'fdscsfa',
          email: 'email',
          name: 'Vishal Gangwar',
          photoURL:
            'https://lh3.googleusercontent.com/a-/AOh14GgE58FaFge_Vm4VMkOhyIK_TT4zLsgbKf3ZHm6J',
          bio:
            "I'm a professional Software Developer. I love to write Technical content. I love to write Technical content. I love to write Technical content",
        },
        comments: [
          {
            user: {
              uid: 'fdscsfa',
              email: 'email',
              name: 'Sanjay Singh',
              photoURL:
                'https://lh3.googleusercontent.com/ogw/ADGmqu_ScgMaCc0y9FV2t9pguVquQoykY2n4I54OA7OV=s32-c-mo',
            },
            text: `Love your blog page! Simply the best! Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.`,
            createdAt: new Date(),
          },
          {
            user: {
              uid: 'fdscsfa',
              email: 'email',
              name: 'Manu',
              photoURL: 'https://www.w3schools.com/w3images/girl_train.jpg',
            },
            text: `Love hats!!`,
            createdAt: new Date(),
          },
        ],
      };
    });
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
