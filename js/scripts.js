function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a * h / 2;
	}
	else {
		alert("Incorrect data");
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(5, 6);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(-4, 4);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(0, 10);
console.log(triangle3Area);
