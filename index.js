console.log("Its working")
let btnEl = document.getElementById('convert-btn')
let inputEl = document.getElementById("input-el")
console.log(btnEl)
console.log(inputEl);
let meterFeet = document.getElementById('meter-feet-result')
console.log(meterFeet)
let leterGallon = document.getElementById('liter-gallon-result')
console.log(leterGallon)
let kilogramPound = document.getElementById('kilogram-pounds-result')
console.log(kilogramPound)

btnEl.addEventListener('click', function() {
    let inputValue = (inputEl.value);
    if (isNaN(inputValue) || inputValue === '') {
        console.log("please enter a number")
    } else {
        meterFeet.textContent = `${inputValue} meters = ${(inputValue*3.28084).toFixed(2)} feets | ${inputValue} feets = ${(inputValue*0.304).toFixed(2)} meters `
        leterGallon.textContent = `${ inputValue }liters = ${(inputValue*0.264172 ).toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue*3.785412).toFixed(2)} liters `

        kilogramPound.textContent = `${ inputValue } kilos = ${(inputValue*2.20462 ).toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue*0.453592).toFixed(2)} kilogram `
        inputEl.value = "";
        console.log(inputValue);
    }

})