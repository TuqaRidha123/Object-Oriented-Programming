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