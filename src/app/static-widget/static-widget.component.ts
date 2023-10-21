import { Component, Input } from '@angular/core';
import { WidgetData, WidgetType } from '../models/widget-data.model';

@Component({
  selector: 'app-static-widget',
  templateUrl: './static-widget.component.html',
  styleUrls: ['./static-widget.component.scss']
})
export class StaticWidgetComponent {
  @Input() widgetData: WidgetData = new WidgetData(0, '', WidgetType.user);
}
