import {Component} from '@angular/core';
import {interval} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const intervalStream$ = interval(1000) //$ - (не обязательный знак)показывает что здесь содержит стрим от rxjs
    intervalStream$.subscribe((value => {
      console.log(value)
    }))

  }

}
