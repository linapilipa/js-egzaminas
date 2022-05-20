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
        console.log(this.budget)
    }
    
    wasExpensive(movieBudget){
        if (movieBudget > 100000000){
        return('true')
        } 
        else return('false')
    }
}  


let theBatmanMovie = new Movie ('The Batman', 'Matt Reeves', 200000000)
// console.log(theBatmanMovie)

let brangusFilmas = theBatmanMovie.wasExpensive(200000000)
console.log(brangusFilmas)





