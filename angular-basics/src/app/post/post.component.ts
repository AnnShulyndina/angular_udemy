import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
//3
// postcomponent принимает параметр post. нам необходимо его передать в app.component html
  @Input() post: Post
  @ContentChild('info', {static:true}) infoRef: ElementRef

  constructor() {
  }

  ngOnInit(){
  console.log(this.infoRef.nativeElement)
  }
}


