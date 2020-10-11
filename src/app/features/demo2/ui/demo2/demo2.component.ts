import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
