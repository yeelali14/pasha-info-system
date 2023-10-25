import { Component, OnInit } from '@angular/core';
import { WidgetData, WidgetType } from '../models/widget-data.model';
import { MapAdapterService } from '../services/map-adapter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  constructor(private mapAdapterService: MapAdapterService) {}
  widgetData: WidgetData = new WidgetData(0, '', WidgetType.user);
  ngOnInit(): void {
    this.widgetData = {
      title: 'Widget Title',
      count: 24,
      type: WidgetType.user
    };
    this.mapAdapterService.calculateDataDelta();
  }

}
