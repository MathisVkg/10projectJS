
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
let pageNumber = 1;
let cardsTag = document.getElementById("cardsTag");
// let cardsTagSearch = document.getElementById("cardsTagSearch");
// let searchTag = document.getElementById("searchTag");


// searchTag.addEventListener("click", () => {
//     stockValue = document.getElementById("searchValue").value;
//     console.log(stockValue);
// })


function getMovie() {
    fetch(APIURL + pageNumber)
    .then((res) => res.json())
    .then((data) => {
        for(let count = 0; count < 20; count++) {
            let card = document.createElement("div");
            let cardTitle = document.createElement("p");
            let cardScore = document.createElement("p");
            let cardImg = document.createElement("img");
            let divTitle = document.createElement("div");
            let cardDes = document.createElement("p");
            divTitle.classList.add("nameFlex");
            
            card.classList.add("cardMovie");
            cardTitle.innerHTML = data.results[count].title;
            cardTitle.classList.add("movieTitle");

            cardScore.innerHTML = data.results[count].vote_average;
            if(data.results[count].vote_average < 3) {
                cardScore.classList.add("movieScore1");
            } else if (data.results[count].vote_average <= 6 && data.results[count].vote_average > 3) {
                cardScore.classList.add("movieScore2");
            } else if (data.results[count].vote_average <= 10 && data.results[count].vote_average > 6) {
                cardScore.classList.add("movieScore3");
            }

            if(data.results[count].poster_path === null) {
                cardImg.src = "";
            } else {
                cardImg.src = IMGPATH + data.results[count].poster_path;
                cardImg.classList.add("imgMovie");
            }
            
            cardDes.classList.add("description");
            cardDes.innerHTML = data.results[count].overview;


            card.appendChild(cardImg);
            card.appendChild(divTitle);
            card.appendChild(cardDes);
            divTitle.appendChild(cardTitle);
            divTitle.appendChild(cardScore);
            cardsTag.appendChild(card);
        }
        pageCheck();
        // console.log(data.results[1].vote_average);
        // console.log(data);
    });
}

function pageCheck() {
    if(pageNumber != 20) {
        pageNumber++;   
        getMovie();
    } else {
        return;
    }
}


getMovie();