/**
 * Created by liuxuwen on 19-1-4.
 */
/**
 * Created by liuxuwen on 19-1-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-range-date-selector',
    templateUrl: './range-date-selector.component.html',
    styleUrls: ['./date-time-selector.component.css']
})
export class RangeDateSelectorComponent {
    dateRange : any[] = [];
    dateRange2 : any[] = [];
    dateRange3 : any[] = [];
    dateRange4 : any[] = [];
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    tabItems3 : any[] = [];
    currentTab3 : string;
    tabItems4 : any[] = [];
    currentTab4 : string;
    isShow : boolean = false;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab3= this.tabItems3[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2 = this.tabItems2[0].label;
        this.tabItems4 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab4= this.tabItems2[0].label;

        this.setDateRange(this.dateRange);
        this.setDateRange(this.dateRange2);
        this.setDateRange(this.dateRange3);
        this.setDateRange(this.dateRange4);
    }

    setDateRange(range : any[]) {
        let startDate : any = new Date();
        let endDate : any = new Date();
        endDate.setMonth(startDate.getMonth() + 1);
        range.push(startDate);
        range.push(endDate);
    }

    openSelector() {
        this.isShow = !this.isShow;
    }

    dateChange() {
        this.isShow = false;
    }
}

