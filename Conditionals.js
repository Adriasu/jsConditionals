// Ej 1:

let number = 5;
if (number >= 5) {
  console.log("El número es mayor o igual que 5");
} else {
  console.log("El número es menor que 5");
}

// Ej 2:

if (number > 5) {
  console.log("El número es mayor que 5");
} else if (number < 5) {
  console.log("El número es menor que 5");
} else {
  console.log("El número es igual a 5");
}

// Ej 3:

if (number % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// Ej 4:

let number1 = 10,
  number2 = 30;

if (number1 > number2) {
  console.log(`Número mayor = ${number1}`);
} else if (number2 > number1) {
  console.log(`Número mayor = ${number2}`);
} else {
  console.log(`Los dos números son iguales a ${number1}`);
}

// Ej 5:

let lado1 = 8,
  lado2 = 6,
  lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
  console.log("El tiángulo es EQUILÁTERO");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("El triángulo es ISÓSELES");
} else {
  console.log("El triángulo es ESCALENO");
}

// Ej 6:

let min = 10,
  max = 20,
  number3 = 11;

if (number3 > 10 && number3 < max) {
  console.log(
    `El número ${number3} se encuentra dentro del rango de ${min} y ${max}`
  );
} else {
  console.log("Número fuera de rango");
}

// Ej 7:

let operation = "*";

if (operation === "+") {
  console.log(number1 + number2);
} else if (operation === "-") {
  console.log(number1 - number2);
} else if (operation === "*") {
  console.log(number1 * number2);
} else if (operation === "/") {
  console.log(number1 / number2);
} else {
  console.log("Invalid operation");
}

// Ej 8:

//let year = prompt("Introduce un año");

// if (year % 4 === 0) {
//     alert(`El año ${year} es bisiesto`)
// } else { alert(`El año ${year} NO es bisiesto`);}

// year % 4 === 0
//   ? alert(`El año ${year} es bisiesto`)
//   : alert(`El año ${year} NO es bisiesto`);

// Ej 9:

const month = prompt("Ingrese un mes en inglés y en minúsculas:");

// switch (month) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     alert(`El mes ${month} tiene 31 días.`);
//     break;
//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     alert(`El mes ${month} tiene 30 días.`);
//     break;
//   case "february":
//     alert(`El mes ${month} tiene 28/29 días.`);
//     break;
//   default:
//     alert("No es un mes válido");
//     break;
// }

// Ej 10:

switch (month) {
  case "january":
  case "february":
  case "march":
    alert(`En el mes ${month} es INVIERNO`)
    break;
  case "april":
  case "may":
  case "june":
    alert(`En el mes ${month} es PRIMAVERA`)
    break;
  case "july":
  case "august":
  case "september":
    alert(`En el mes ${month} es VERANO`)
    break;
  case "october":
  case "november":
  case "december":
    alert(`En el mes ${month} es OTOÑO`)
    break;

  default:
    alert("No es un mes válido")
    break;
}
