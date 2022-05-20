/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let output = document.getElementById('output')

fetch(ENDPOINT)
    .then(response => { return response.json();})
    .then(getCars => {
        console.log(getCars[0].brand);
        showCars()
    })

function showCars (getCars) {
    let brand = document.createElement('div')
    brand.setAttribute('class', 'brand')
    output.appendChild(brand)
    brand.innerHTML = "Brand"
}


