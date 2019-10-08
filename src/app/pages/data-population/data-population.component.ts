import {Component, OnInit} from '@angular/core';
import {DataPopulationDatas} from './data-population-data';

@Component({
    selector: 'app-data-population',
    templateUrl: './data-population.component.html',
    styleUrls: ['./data-population.component.css']
})
export class DataPopulationComponent implements OnInit {

    const
    datas = new DataPopulationDatas();
    let
    displayDatas;

    constructor() {
        this.getData(0, 10);
    }

    ngOnInit() {
    }

    getData(start: number, end: number) {
        this.displayDatas = this.datas.getData(start, end);
        console.log(this.displayDatas);
    }
}
