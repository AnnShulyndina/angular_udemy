import {Component, EventEmitter} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = ''

  posts: Post[] = [
    {title: 'Hello, I am a title', text: 'Hello,  I am a text', id: 0},
    {title: 'This is HOT news of the day', text: 'The sun is shining red color', id: 1},
    {title: 'I love eat cookies', text: 'why cookies so fat?', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePosts(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
