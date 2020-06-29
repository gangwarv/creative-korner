import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  user$: Observable<User>;
  searchText: String = '';
  matchedBlogs: { id: String; title: String }[];

  constructor(private router: Router, private auth: AuthService) {
    this.user$ = auth.user$;
  }
  onSearchTextChange(e) {
    if (e.target.value.length == 1)
      this.matchedBlogs = [
        {
          title: 'How to setup user authentication in MongoDB 4.0',
          id: 'how-to-setup-auth-in-mongodb-3-0-properly',
        },
        {
          title: 'Docker for Node.js in Production',
          id: 'docker-for-nodejs-in-production',
        },
      ];
    else if (e.target.value.length == 2)
      this.matchedBlogs = [
        {
          title: 'How to setup user authentication in MongoDB 4.0',
          id: 'how-to-setup-auth-in-mongodb-3-0-properly',
        },
      ];
    else this.matchedBlogs = [];
  }
  openBlog(id) {
    this.router.navigate(['/blog', id]);
    this.searchText = '';
    this.matchedBlogs = [];

    (window as any).closeSearch();
  }
  ngOnInit(): void {}

  signIn() {
    this.auth.googleSignin();
  }
  signOut(){
    this.auth.signOut()
  }
}
