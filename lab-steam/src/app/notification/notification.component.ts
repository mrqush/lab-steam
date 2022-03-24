import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notification" [ngClass]="status">
      {{text}}
    </div>
  `,
  styles: [
    `
    .notification {
      padding: 5px;
      width: 200px;
      height: 100px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      text-align: center;
    }

    .default {
      background-color: #494949;
    }

    .success {
      background-color: rgb(54, 160, 50);
    }

    .error {
      background-color: rgb(165, 45, 45);
    }
    `
  ]
})
export class NotificationComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() status: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
