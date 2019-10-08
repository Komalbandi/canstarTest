import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

    progressWidth = 30;

    constructor() {
        // while (this.progressWidth < 100) {
        //     // setTimeout(() => {
        //     //     this.progressWidth++;
        //     //     console.log(this.progressWidth);
        //     // }, 1000);
        //     this.progressWidth++;
        //     console.log(this.progressWidth);
        // }
    }

    ngOnInit() {
    }

}
