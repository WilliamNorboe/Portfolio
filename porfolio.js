

let linkdin = document.getElementsByClassName("devicon-linkedin-plain");
let gitHub = document.getElementsByClassName("devicon-github-original colored");
for(let i = 0; i < linkdin.length; ++i){
    linkdin[i].addEventListener("click", linkdinClick)
    gitHub[i].addEventListener("click", gitHubClick)
}

function linkdinClick(){
    console.log("me clicked");
    window.open("https://www.w3schools.com");
}

function gitHubClick(){
    window.open("https://github.com/WilliamNorboe");
}