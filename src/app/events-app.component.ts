import { Component } from '@angular/core';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@Component({
  selector: 'events-app',
  template: `
  <events-list></events-list>
  `,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
