String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!!!!! AHGHGHAGH`;
};

// 'this' refers to 
// whatever string 
// we're calling the method on

Array.prototype.pop = function() {
    return "Sorry I want that element, I will never pop it off!"
};