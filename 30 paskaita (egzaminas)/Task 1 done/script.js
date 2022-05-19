/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let weight = document.querySelector('form')
console.log(weight)

let output = document.getElementById('output')
console.log(output)

weight.addEventListener('submit', weightSubmit);


function weightSubmit(event) {
    event.preventDefault()

    let kilo = document.getElementById('search').value

    let lb = document.createElement('div')
    lb.innerHTML = kilo * 2.2046 + ' ' + 'lb'
    lb.style.background = 'pink'
    lb.style.width = '80%'
    lb.style.margin = '20px auto'
    lb.style.padding = '20px'
    lb.style.textAlign = 'center'
    lb.style.fontFamily = 'Trebuchet MS'
    lb.style.fontSize = '35px'
    output.appendChild(lb)

    let grams = document.createElement('div')
    grams.innerHTML = kilo / 0.0010000 + ' ' + 'g'
    grams.style.background = 'beige'
    grams.style.width = '80%'
    grams.style.margin = '20px auto'
    grams.style.padding = '20px'
    grams.style.textAlign = 'center'
    grams.style.fontFamily = 'Trebuchet MS'
    grams.style.fontSize = '35px'
    output.appendChild(grams)

    let oz = document.createElement('div')
    oz.innerHTML = kilo * 35.274 + ' ' + 'oz'
    oz.style.background = 'rgb(194, 250, 179)'
    oz.style.width = '80%'
    oz.style.margin = '20px auto'
    oz.style.padding = '20px'
    oz.style.textAlign = 'center'
    oz.style.fontFamily = 'Trebuchet MS'
    oz.style.fontSize = '35px'
    output.appendChild(oz)


    // output.innerHTML = kilo/0.0010000 + kilo*2.2046
}
