import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {

  @Input() event : any;
  constructor() { }

  ngOnInit(): void {
  }

}
