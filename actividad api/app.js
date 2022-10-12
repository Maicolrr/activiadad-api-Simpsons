const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
const btnrefresh = document.getElementById("refresh");
const namecharacter = document.getElementById("namecharacter");
const img = document.getElementById("img");
const quote = document.getElementById("quote");
const inf = [];

btnrefresh.addEventListener("click", () => {
    fetch(url)
    .then(Response => Response.json())
    .then(data => {

        img.src = data[0].image,
        namecharacter.textContent = data[0].character,
        quote.textContent = data[0].quote
   
    } )

    // .then(data => inf.push(data[0]));

    // inf.forEach(data => {
    //     img.src = data.image;
    //     quote.textContent = data.quote;
    //     namecharacter.textContent = data.character; 
     
    // })

    // console.log(inf);
    // inf.shift()
})