import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;
    starwidth: number;
    ngOnChanges(): void {
        // rating pode ser 74 ou 94
        this.starwidth = this.rating * 74 / 5;
    }
}