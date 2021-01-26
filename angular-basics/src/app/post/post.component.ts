import {Component, Input, OnInit} from '@angular/core';
import {Couple, Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
//3
// postcomponent принимает параметр post. нам необходимо его передать в app.component html
  @Input() myPost: Post
  family: Couple

  constructor() {
  }

  ngOnInit(): void {
  }

}
