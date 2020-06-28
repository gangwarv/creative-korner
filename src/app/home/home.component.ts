import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  relatedBlogs = [{
    title:'How to setup user authentication in MongoDB 4.0',
    id:'how-to-setup-auth-in-mongodb-3-0-properly'
  },{
    title:'Docker for Node.js in Production',
    id:'docker-for-nodejs-in-production'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
