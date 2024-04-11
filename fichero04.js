
let baseRectangulo = parseInt(prompt("Ingrese la base del Rectangulo: "));
let alturaRectangulo = parseInt(prompt("Ingrese la altura del Rectangulo: "));

let baseTriangulo = parseInt(prompt("Ingrese la base del Triangulo: "));
let alturaTriangulo = parseInt(prompt("Ingrese la altura del Triangulo: "));

let areaRectangulo = baseRectangulo * alturaRectangulo;

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

let areaTotal = areaRectangulo + areaTriangulo;

document.write("El area total de la figura es : " + areaTotal);