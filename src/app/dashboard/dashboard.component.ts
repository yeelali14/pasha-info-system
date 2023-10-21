import { Component, OnInit } from '@angular/core';
import { WidgetData, WidgetType } from '../models/widget-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  widgetData: WidgetData = new WidgetData(0, '', WidgetType.user);
  ngOnInit(): void {
    this.widgetData = {
      title: 'Widget Title',
      count: 24,
      type: WidgetType.user
    };
  }

}
