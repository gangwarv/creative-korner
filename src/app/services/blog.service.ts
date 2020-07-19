import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Blog } from '../models/blog.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private colName = "BlogPost";
  private collection: AngularFirestoreCollection<Blog>;
  constructor(private afs: AngularFirestore) {
    this.collection = afs.collection<Blog>("BlogPost");
  }

  get(id: string): Observable<Blog> {
    return this.afs.collection(this.colName).doc<Blog>(id).valueChanges();//.get<Blog>();
  }

  create(post: Blog): Promise<any> {
    return this.afs.collection<Blog>(this.colName).add(post);
  }
  update(post: Blog): Promise<any> {
    return this.collection.doc(post.id).set({...post, updatedAt:new Date()});
  }
}
