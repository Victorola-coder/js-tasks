const shapes = {
    circle: {
      calculateArea: (radius) => Math.PI * radius * radius,
      calculatePerimeter: (radius) => 2 * Math.PI * radius,
    },
    square: {
      calculateArea: (side) => side * side,
      calculatePerimeter: (side) => 4 * side,
    },
    rectangle: {
      calculateArea: (length, width) => length * width,
      calculatePerimeter: (length, width) => 2 * (length + width),
    },
    triangle: {
      calculateArea: (base, height) => 0.5 * base * height,
      calculatePerimeter: (side1, side2, side3) => side1 + side2 + side3, // Incomplete, replace with triangle perimeter calculation
    },
  };
  
  const volumeShapes = {
    cube: (side) => side * side * side,
    sphere: (radius) => (4 / 3) * Math.PI * radius * radius * radius,
    cylinder: (radius, height) => Math.PI * radius * radius * height,
  };
  
  const updateForm = (shape) => {
    const formContainer = document.getElementById('shape-form');
    formContainer.innerHTML = '';
  
    if (shape === 'triangle') {
      formContainer.innerHTML = `
        <label for="base">Base:</label>
        <input type="number" id="base" required>
        <br>
        <label for="height">Height:</label>
        <input type="number" id="height" required>
        <br>
        <label for="side1">Side 1:</label>
        <input type="number" id="side1" required>