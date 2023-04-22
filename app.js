function findDiagonalOfSquare(sides_length){
    var x_squared = Math.pow(sides_length, 2) + Math.pow(sides_length, 2);
    var x = Math.sqrt(x_squared)
    alert(x);
}

function findAreaOfTriangle(side5, side6, side7){
    var semi_perimeter = (side5 + side6 + side7)/2;
    var area = Math.sqrt(semi_perimeter*(semi_perimeter-side5)*(semi_perimeter-side6)*(semi_perimeter-side7))
    alert(area);
}

function findCircumferenceOfCircle(radius){
    alert(2*Math.PI*radius);
}

function findSurfaceAreaOfCircle(radius){
    alert(Math.PI*Math.pow(radius, 2));
}

// findDiagonalOfSquare(9);
// findAreaOfTriangle(5,6,7);
// findCircumferenceOfCircle(4);
// findSurfaceAreaOfCircle(4);