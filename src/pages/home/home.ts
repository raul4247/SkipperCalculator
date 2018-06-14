import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	numClasses: number = 34;
	skippedClasses: number = 7;
	minPercentage: number = 25;

	myPercent: number;
	myPossibleSkips: number;

	constructor(public navCtrl: NavController){}

	calculate(){
		this.myPercent = Number((this.skippedClasses/this.numClasses * 100).toFixed(2));
		this.myPossibleSkips = Math.floor((this.numClasses * this.minPercentage * 0.01) - this.skippedClasses);
	}
}