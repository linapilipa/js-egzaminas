/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;

    }
    wasExpensive(brangu){
        return brangu

    }
}  

let theBatman = new Movie ('The Batman', 'Matt Reeves', '$200 000 000')
let frozen = new Movie ('Frozen', 'Chris Buck', '$150 000 000')
let gladiator = new Movie ('Gladiator', 'Ridley Scott', '$103 000 000')

let brangusFilmas = theBatman.wasExpensive('$200 000 000')
console.log(brangusFilmas)

