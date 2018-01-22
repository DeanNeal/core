import { Component, Decorators } from '../../../../core';
import Tpl from './doc-quick-start.component.html';
// import ProjectsStore from 'store/projects.store';


let count = 100;
let INDEX = 0;
let INDEX_VALUE = 100 / count;
// let state = true;
let QWERTY = 1;

@Decorators.ComponentDecorator({
    selector: 'app-documentation-quick-start',
    template: Tpl,
    props: () => {
        return {
            particles: []
        }
    }
})
export class DocQuickStartComponent {
    constructor(params) {

    }

    onInit() {
        this.getColors();
        setInterval(() => {
            this.getColors();
        }, 60	);
    }

    getColors() {
        let particles = [];


        // if (INDEX < count /*&& state*/) {
            INDEX += INDEX_VALUE;
        // }

	    // if (INDEX < INDEX_VALUE) {
	    //     state = true;
	    // }


	    // if (INDEX >= count || !state) {
	    //     INDEX -= INDEX_VALUE;
	    //     state = false;
	    // }

        for (var i = 0; i <= count; i++) {
        	// let modulo = (i * INDEX_VALUE + INDEX) % count;
         //    particles.push({ name: i, bg: this.perc2color(i * INDEX_VALUE  - modulo) });

         	let val = i * INDEX_VALUE;
            particles.push({ name: i, bg: this.perc2color(i * INDEX_VALUE  ) });
        }

        this.particles = particles;
    }

    perc2color(perc) {
        var r, g, b = 0;
        if (perc < 50) {
            r = 255;
            g = Math.round(5.1 * perc);
        } else {
            g = 255;
            r = Math.round(510 - 5.10 * perc);
        }
        var h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    // colorLuminance(hex, lum) {

    // 	// validate hex string
    // 	hex = String(hex).replace(/[^0-9a-f]/gi, '');
    // 	if (hex.length < 6) {
    // 		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    // 	}
    // 	lum = lum || 0;

    // 	// convert to decimal and change luminosity
    // 	var rgb = "#", c, i;
    // 	for (i = 0; i < 3; i++) {
    // 		c = parseInt(hex.substr(i*2,2), 16);
    // 		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    // 		rgb += ("00"+c).substr(c.length);
    // 	}

    // 	return rgb;
    // }

    // shadeColor2(color, percent) {   
    //     var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    //     return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    // }

    onDestroy() {

    }
}