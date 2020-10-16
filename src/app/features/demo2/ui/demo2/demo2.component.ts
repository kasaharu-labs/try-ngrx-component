import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo2Component implements OnInit {
  constructor(private app: ApplicationRef) {
    requestAnimationFrame(() => this.app.tick());
  }

  message$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    setTimeout(() => {
      this.message$.next('Hello, ngrx/component');
    }, 2000);
  }
}
