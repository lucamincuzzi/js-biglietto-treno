alert("Salve, gentile viaggiatore!")

// Raccolta dati
let kmNumber = parseInt(prompt("Quanti sono i km da percorrere"))
if (kmNumber > 0) {

}
else {
    alert("Inserire un numero positivo")
    kmNumber = null
}
console.log(kmNumber, typeof kmNumber)
let travelerAge = parseInt(prompt("Qual è l'eta del passeggero?"))
if (travelerAge > 0 && travelerAge < 100) {

}
else {
    alert("Inserire un'età valida")
    travelerAge = null
}
console.log(travelerAge, typeof travelerAge)