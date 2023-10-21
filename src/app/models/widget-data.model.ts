export enum WidgetType {
    user,
    product
}

export class WidgetData {
    count: number;
    title: string;
    type: WidgetType;

    constructor(count: number, title: string, type: WidgetType) {
        this.count = count;
        this.title = title;
        this.type = WidgetType.user;
    }
}
