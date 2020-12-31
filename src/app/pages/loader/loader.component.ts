import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <p>
      loader works!
    </p>
  `,
  styles: [
  ]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
