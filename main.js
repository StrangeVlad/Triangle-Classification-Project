const firstSide = document.getElementById("firstSide");
const secondSide = document.getElementById("secondSide");
const thirdSide = document.getElementById("thirdSide");
const btnType = document.getElementById("btnType");
const resultType = document.getElementById("resultType");
const resultAngleType = document.getElementById("resultAngleType");

const getTriangleAngleType = (a, b, c) => {
  // Calculate each angle in radians using the law of cosines
  const angleA = Math.acos(
    (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)
  );
  const angleB = Math.acos(
    (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)
  );
  const angleC = Math.acos(
    (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)
  );

  // radians to degrees
  const angleA_deg = (angleA * 180) / Math.PI;
  const angleB_deg = (angleB * 180) / Math.PI;
  const angleC_deg = (angleC * 180) / Math.PI;

  if (angleA_deg === 90 || angleB_deg === 90 || angleC_deg === 90) {
    resultAngleType.textContent = "Right Triangle!";
  } else if (angleA_deg < 90 && angleB_deg < 90 && angleC_deg < 90) {
    resultAngleType.textContent = "Acute Triangle!";
  } else {
    resultAngleType.textContent = "Obtuse Triangle!";
  }
};

const getTriangleType = (a, b, c) => {
  if (a === b && b === c) {
    resultType.textContent = "Equilateral Triangle!";
  } else if (a === b || b === c || c === a) {
    resultType.textContent = "Isosceles Triangle!";
  } else {
    resultType.textContent = "Scalene Triangle!";
  }
};

btnType.addEventListener("click", () => {
  const a = Number(firstSide.value);
  const b = Number(secondSide.value);
  const c = Number(thirdSide.value);

  // Check if the sides form a valid triangle
  if (a + b > c && a + c > b && b + c > a) {
    getTriangleType(a, b, c);
    getTriangleAngleType(a, b, c);
  } else {
    resultType.textContent = "Invalid triangle sides.";
    resultAngleType.textContent = "";
  }
});
