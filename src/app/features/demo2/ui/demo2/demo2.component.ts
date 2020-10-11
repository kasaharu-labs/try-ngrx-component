import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo2Component implements OnInit {
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
