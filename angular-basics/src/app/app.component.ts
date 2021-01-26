import {Component} from '@angular/core';
//1
export interface Post {
  title: string
  text: string
  id?: number
}

export interface Couple {
  name: any
  age: number
  sex?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  //2
  postList: Post[] = [
    {title: 'Title1', text: 'Test1', id:1},
    {title: 'Title2', text: 'Test2', id:2}
  ]
}


