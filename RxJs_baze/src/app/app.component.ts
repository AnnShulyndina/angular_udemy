import {Component} from '@angular/core';
import {Subscription, Observable} from 'rxjs'
import {error} from "@angular/compiler/src/util";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription

  constructor() {
    const stream$ = new Observable(observer => {

      setTimeout(() => {
        observer.next(1)
      }, 1500)

      setTimeout(() => {
        observer.complete()
      }, 2500)

      setTimeout(() => {
        observer.error('Something went wrong')
      }, 2600)

    })
    this.sub = stream$
      .subscribe(
        value => console.log('Next:', value),
        error => console.log('Error:', error),
        () => console.log('Complete')
      )
  }

  stop() {
    this.sub.unsubscribe()
  }
}

