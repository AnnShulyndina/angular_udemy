import {Injectable} from '@angular/core';

export interface Post {
  title: string
  text: string
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {title: 'Post1', text: 'Sample text for post 1', id: 11},
    {title: 'Post2', text: 'Sample text for post 2', id: 22},
    {title: 'Post3', text: 'Sample text for post 1', id: 33},
    {title: 'Post4', text: 'Sample text for post 1', id: 44},
  ]

  getById(id: number) {
    return this.posts.find(p => p.id === id)
  }
}
