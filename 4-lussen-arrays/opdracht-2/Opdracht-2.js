function telOp(getallen) {
  let som = 0;
  for (let i = 0; i < getallen.length; i++) {
    som += getallen[i];
  }
  return som;
}

// Testen van de functie
let getallenArray = [5, 10, 15];
let resultaat = telOp(getallenArray);

console.log(resultaat); // Output: 30
