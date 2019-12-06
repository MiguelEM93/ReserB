import { BaseComponent } from '@reserb-app/core';
import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { google } from 'google-maps';

@Component({
    selector: 'reserb-spaces-google-maps',
    templateUrl: './spaces-google-maps.component.html',
    styleUrls: ['./spaces-google-maps.component.scss']
})
export class SpacesGoogleMapsComponent extends BaseComponent implements AfterViewInit {

    map: any;
    google: any;
    @Input() coords: {latitude: number, longitude: number};
    @ViewChild('map', {static: false}) mapElement: any;

    constructor() {
        super();
    }

    ngAfterViewInit() {
        this.initMap();
    }

    initMap(){
        const POSITION = { lat: this.coords.latitude, lng: this.coords.longitude };
        const map =  new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: POSITION || { lat: 22 , lng: 22}
        });
        const marker = new google.maps.Marker({
            position: POSITION,
            map: map
        });
    }
}
