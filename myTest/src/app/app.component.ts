import {Component} from '@angular/core';

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
  listOfPosts: Post[] = [
    {title: 'This is my first title', text: 'This text will be invisible', id: 0},
    {title: 'No need title', text: 'No need '}
  ]

}
