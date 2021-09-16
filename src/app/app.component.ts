import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alpha';
  value = 0;

  onActivate(component: any) {
    component.notify.subscribe((data: number) => {
      // you can count the number of observers that are subscribed
      // to the eventemitter
      console.log(component.notify.observers.length);

      // do not make this lambda a real function, because the "this"
      // will not point at the component - unless you "bind" this to it.
      this.value = data;
    });
  }
}
