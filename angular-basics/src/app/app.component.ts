import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
arr = [1, 1, 3, 5, 8, 12]

  objs = [
    {title: 'Post1', author: 'Vladilen', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post2', author: 'Vladilen2', comments: [
        {name: 'Max', text: 'lorem1'},
        {name: 'Max', text: 'lorem2'},
        {name: 'Max', text: 'lorem3'}
      ]}
      ]
}


