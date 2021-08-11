
const APIURL = "https://api.github.com/users/";

let container = document.getElementById("searchCont");
let containerApi = document.getElementById("resultApi");
let userPP = document.getElementById("avatarUrl");
let userName = document.getElementById("loginUser");
let userBio = document.getElementById("bioUser");
let userLocal = document.getElementById("locaUser");
let userRepo = document.getElementById("publicRepo");
let userFollow = document.getElementById("followersUser");
let userFollowing = document.getElementById("followingUser");
let repoCont = document.getElementById("targetContainer");

let user;
let APIURLREPO;

function displayApi() {
    container.setAttribute("style", "display: none;");
    containerApi.removeAttribute("style");
}

function search(userName) {
    if(event.keyCode == 13) {
        user = userName.value;
        APIURLREPO = "https://api.github.com/users/" + user + "/repos";
        getUser();
        displayApi();
    }
}

function getRepo() {
    fetch(APIURLREPO)
    .then((res) => res.json())
    .then((data) => {
        for(let i = 0; i < 7; i++) {
            let repoCreate = document.createElement("a");
            repoCreate.href = data[i].html_url;
            repoCreate.innerHTML = data[i].name;
            repoCreate.classList.add("repoClass");
            repoCont.appendChild(repoCreate);
        }
    });
}

function getUser() {
    fetch(APIURL + user)
    .then((res) => res.json())
    .then((data) => {
        userPP.src = data.avatar_url;
        userName.innerHTML = data.name;
        userName.href = data.html_url;
        userBio.innerHTML = data.bio;
        userLocal.innerHTML = data.location;


        userRepo.innerHTML = data.public_repos;        
        userFollow.innerHTML = data.followers;
        userFollowing.innerHTML = data.following;
        getRepo();
    });
}
// getUser();