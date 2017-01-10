import {Component} from 'angular2/core';

class AppComponent {

	static get annotations() {
		return [
			new Component({
	    		selector: "app",
	    		template: '<h1> Angular 2 w/ ES6 </h1>'
	  		}),
		];
	}

	constructor () {}
}

export {AppComponent};
