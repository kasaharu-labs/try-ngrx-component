import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  constructor(private app: ApplicationRef, private readonly http: HttpClient) {
    requestAnimationFrame(() => this.app.tick());
  }

  user$: Observable<any | null> = of(null);
  messageSubject$ = new BehaviorSubject<string>('Hello world');
  _message$ = this.messageSubject$.asObservable();

  get message$() {
    return this._message$;
  }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }

  changeMeassage() {
    this.messageSubject$.next('click message');
  }
}
