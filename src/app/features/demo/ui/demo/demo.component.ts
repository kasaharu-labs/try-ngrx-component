import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
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
