function scaleDown(y, newLength) {
    var newY = [];
    var dx = y.length / newLength;
    for(var i = 0; i < newLength; i++) {
        var x = i*dx;
        var x1 = Math.ceil(x);
        if(x1 == y.length)
            x1 = Math.floor(x);
        var x0 = x1 - 1;
        var y0 = y[x0];
        var y1 = y[x1];
        var yi = y0 + (y1 - y0)*(x -x0);
        newY.push(yi);
    }
    return newY;
}

module.exports = scaleDown;