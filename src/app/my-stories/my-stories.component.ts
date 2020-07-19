import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.scss']
})
export class MyStoriesComponent implements OnInit {
  myBlogs = [
    {
      title: 'My First Blog',
      id: 'my-first-blog'
    },
    {
      title: 'How to setup user authentication in MongoDB 4.0',
      id: 'how-to-setup-auth-in-mongodb-3-0-properly'
    },
    {
      title: 'Docker for Node.js in Production',
      id: 'docker-for-nodejs-in-production'
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
