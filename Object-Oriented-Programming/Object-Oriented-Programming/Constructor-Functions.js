/*
// converts RGB to HEX
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`
}

/*
hex(255, 100, 25);
returns "#ff6419"
*/
/* 
// let's build an object
// hence the term 'factory'
// not the most ideal way
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    };
    color.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 355, 150);
firstColor.hex(); // firstColor.hex();
firstColor.rgb(); // "rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb();
black.hex();
*/

// when not inside an object
// "this" refer to the global scope
// or the nearest object
// which is the window objects
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
};

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
};
// create new color first then...
// run in Google console
// to see what it does
// pass in a parameter 
Color.prototype.rgba = function(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// makes new object and sets "this" 
// in that new object so it doesn't return window
// the magic of "new" keyword
const color1 = new Color(40, 255, 60);
const color2 =  new Color(0, 0, 0);

//color1.hex();
//color2.hex();
//new Color(255, 40, 100); 