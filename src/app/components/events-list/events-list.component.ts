import { Component, OnInit } from '@angular/core';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id : 1,
    name : 'Angular Connect',
    date : '9/26/2036',
    time : '10:00 am',
    price: 599.99,
    imageURL :'/assets/images/angularconnect-shiled.png',
    location : {
      address: '1057 DT',
      city : 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
