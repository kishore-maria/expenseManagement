import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() { 
  }

}
