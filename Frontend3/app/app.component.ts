import { Component, Output } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 class="title">通訊錄</h1>
  <router-outlet></router-outlet>
`,
    directives: []
})
export class AppComponent {

    constructor() {

    }


    ngOnInit() {

    }
}
