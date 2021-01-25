import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1="IamRedLemon"

  onInput(event: any) {
    this.title1 = event.target.value
  }

  title = "initial"
}


