

let linkdin = document.getElementsByClassName("devicon-linkedin-plain");
let gitHub = document.getElementsByClassName("devicon-github-original colored");

linkdin[0].addEventListener("click", linkdinClick);
linkdin[1].addEventListener("click", linkdinClick);
gitHub[0].addEventListener("click", gitHubClick);
gitHub[gitHub.length-1].addEventListener("click", gitHubClick);

function linkdinClick(){
    console.log("me clicked");
    window.open("https://www.linkedin.com/in/william-norboe-37069322b?trk=public_profile_browsemap");
}

function gitHubClick(){
    window.open("https://github.com/WilliamNorboe");
}

const projectClass = (name, img, description, link, github) => {
    return{
        name,
        img,
        description,
        link,
        github
    }
}

let projects = [];
projects.push(projectClass("Fwitter", "./assets/social.png", "A social media site made usifn react where users can send messages and follow users. Data is stored using Firebase.", "https://williamnorboe.github.io/Fwitter/", "https://github.com/WilliamNorboe/Fwitter"));
projects.push(projectClass("Memory Game", "./assets/memory.png", "A memory game where users try to remember which pokemon they have already clicked on.", "https://williamnorboe.github.io/memory-card/", "https://github.com/WilliamNorboe/memory-card"));
projects.push(projectClass("Weather App", "./assets/weather.png", "Display the temperature of a place given a location and displays a related gif.", "https://williamnorboe.github.io/Weather-App/", "https://github.com/WilliamNorboe/Weather-App"));
projects.push(projectClass("ToDo List", "./assets/todo.png", "Allows the user to created lists of items and stores this data for future reference.", "https://williamnorboe.github.io/ToDo-List/", "https://github.com/WilliamNorboe/ToDo-List"));
projects.push(projectClass("CV Editor", "./assets/cv.png", "A form where the user can enter information for a CV. This is just an exampel so the information is not uploaded anywhere.", "https://williamnorboe.github.io/cv-project/", "https://github.com/WilliamNorboe/cv-project"));
projects.push(projectClass("Battleship", "./assets/battleship.png", "A simpel game of battleship where the user can place boats and then play againast the CPU.", "https://williamnorboe.github.io/Battleship/", "https://github.com/WilliamNorboe/Battleship"));

const openWindow = (link) => {
    window.open(link);
}

let projectsDiv = document.querySelector(".projects");
for(let i = 0; i < projects.length; ++i){
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    
    let pimage = document.createElement("div");
    pimage.classList = "pimage";
    pimage.style = 'background-image: url("' + projects[i].img + '");';
    projectDiv.appendChild(pimage);

    let pinfo = document.createElement("div");
    pinfo.classList = "pinfo";

    let projectName = document.createElement("p");
    projectName.classList = "projectName";
    projectName.textContent = projects[i].name;
    pinfo.appendChild(projectName);

    let icons = document.createElement("div");
    icons.classList = "icons";

    let icon = document.createElement("img");
    icon.classList = "icon";
    icon.src = "./assets/tab-plus.svg";
    console.log(projects[i]);
    icon.addEventListener("click", ()=>{openWindow(projects[i].link);});
    icons.appendChild(icon);

    let gitHub = document.createElement("i");
    gitHub.classList = "devicon-github-original colored";
    gitHub.addEventListener("click", ()=>{openWindow(projects[i].github);});
    icons.appendChild(gitHub);

    pinfo.appendChild(icons);

    projectDiv.appendChild(pinfo);

    let description = document.createElement("p");
    description.classList = "description";
    description.textContent = projects[i].description;
    projectDiv.appendChild(description);

    projectsDiv.appendChild(projectDiv);
}