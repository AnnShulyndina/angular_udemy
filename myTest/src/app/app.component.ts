import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

postLists: Post [] = [
  {title: 'Fresh News', text: 'Everyone knows who did it', id: 1},
  {title: 'You asking why', text: 'Because your game is dangerous', id: 2}
]

  updatePosts(post: Post){
  this.postLists.unshift(post)
  // console.log('Post', post)
  }

}
