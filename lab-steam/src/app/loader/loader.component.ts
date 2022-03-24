import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve" id="loader" class="loader" [ngStyle]="{width: width}">
      <path fill="#6C69FF"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
          to="360 50 50" repeatCount="indefinite" />
      </path>
    </svg>
  `,
  styles: [
    `
    :host {
      width: 100%;
    }
    .loader {
      margin: 0 auto;
      display: block;
    }
    `
  ]
})
export class LoaderComponent implements OnInit {
  @Input() width: number = 300;
  constructor() { }

  ngOnInit(): void {
  }

}
