/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let btn = document.getElementById('btn')

btn.addEventListener('click', getUsers, myFunction)

function getUsers() {
    fetch(ENDPOINT)
    .then(response => { return response.json();})
    .then(gitUsers => {
        showUsers(gitUsers)
        myFunction()
        console.log(gitUsers)
    })
}

function myFunction() {
    document.getElementById("message").innerHTML = "";
}

function showUsers(gitUsers) {
    let userInfo = document.getElementById('output') 

    for(let element of gitUsers){
        console.log(element.login, element.avatar_url)
        
        userInfo.innerHTML += element.login + "<br>" + element.avatar_url + "<br>" + "<br>" + "<br>"
        userInfo.style.background = '#fec631'
        userInfo.style.textAlign = 'center' 
    }

}









