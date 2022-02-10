
let titleOfMyFavouriteMovie = "The Shawshank Redemption"


let lengthOfMyFavouriteMovie = 142


let kidFriendlyMyFavouriteMovie = false


let protagonist1OfMyFavouriteMovie = { "actorname": "Tim Robbins", "charactername": "Andy Dufresne" }

let protagonist2OfMyFavouriteMovie = { "actorname": "Morgan Freeman", "charactername": "Red Redding"}


let antagonistOfMyFavouriteMovie = { "actorname": "Bob Gunton", "charactername": "Samuel Norton" }

let someDataOfMyFavouriteMovie = [ { "title": "The Shawshank Redemption", "length": 142, "kidFriendly": false, "actorname": "Tim Robbins" } ]

let myFavouriteMovie = {

    "name": "The Shawshank Redemption",

    "lengthInMinutes": 142,

    "kidFriendly": false,

    "protagonists": [
        { "actorname": "Tim Robbins", "charactername": "Andy Dufresne" },
        { "actorname": "Morgan Freeman", "charactername": "Red Redding" }
    ], 

    "antagonist": [
        { "actorname":  "Bob Gunton", "charactername": "Samuel Norton" },
    ],

}

console.log(someDataOfMyFavouriteMovie)
console.log(typeof lengthOfMyFavouriteMovie)
console.log(typeof myFavouriteMovie)
console.log(typeof kidFriendlyMyFavouriteMovie)
console.log(typeof titleOfMyFavouriteMovie)



