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

btn.addEventListener('click', getUsers)

function getUsers() {
    fetch(ENDPOINT)
    .then(response => { return response.json();})
    .then(gitUsers => {
        showUsers(gitUsers)
        console.log(gitUsers)
    })
}



function showUsers(gitUsers) {
    let userInfo = document.getElementById('output') 

    // for (let i=0, i<gitUsers.lenght; i++){
    //     console.log(gitUsers[i])
    //     userInfo.innerHTML = gitUsers[0].login + ' ' + gitUsers[0].avatar_url
    // }

    for(let element of gitUsers){
        console.log(element.login, element.avatar_url)
        // userInfo.innerHTML = gitUsers[0].login + ' ' + gitUsers[0].avatar_url
        
        userInfo.innerHTML = element.login + ' ' + element.avatar_url
        userInfo.style.background = 'pink'
        userInfo.style.textAlign = 'center' 
    }

        // // userInfo.innerHTML = element.login
        // userInfo.style.background = 'pink'
        // userInfo.style.textAlign = 'center'
    
}







