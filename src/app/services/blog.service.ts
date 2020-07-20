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
    this.collection = afs.collection<Blog>(this.colName);
  }

  get(id: string): Observable<Blog> {
    return this.afs.collection(this.colName).doc<Blog>(id).valueChanges();//.get<Blog>();
  }

  create(post: Blog): Promise<any> {
    return this.afs.collection<Blog>(this.colName).add(post);
  }
  update(post: Blog): Promise<any> {
    let docRef = this.collection.doc<Blog>(post.id);
    // docRef.get()
    return docRef.set({...post, updatedAt:new Date()});
  }
}
