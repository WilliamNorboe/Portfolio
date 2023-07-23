

let linkdin = document.getElementsByClassName("devicon-linkedin-plain");
let gitHub = document.getElementsByClassName("devicon-github-original colored");

linkdin[0].addEventListener("click", linkdinClick);
linkdin[1].addEventListener("click", linkdinClick);
gitHub[0].addEventListener("click", gitHubClick);
gitHub[gitHub.length-1].addEventListener("click", gitHubClick);

function linkdinClick(){
    console.log("me clicked");
    window.open("https://www.w3schools.com");
}

function gitHubClick(){
    window.open("https://github.com/WilliamNorboe");
}

const projectClass = (name, img, description) => {
    return{
        name,
        img,
        description
    }
}

let projects = [];
projects.push(projectClass("Project Name", "", "Short Description of the project. Just a couple sentences will do."));
projects.push(projectClass("Project Name", "", "Short Description of the project. Just a couple sentences will do."));
projects.push(projectClass("Project Name", "", "Short Description of the project. Just a couple sentences will do."));
projects.push(projectClass("Project Name", "", "Short Description of the project. Just a couple sentences will do."));
projects.push(projectClass("Project Name", "", "Short Description of the project. Just a couple sentences will do."));
projects.push(projectClass("Project Name", "", "Short Description of the project. Just a couple sentences will do."));


let projectsDiv = document.querySelector(".projects");
for(let i = 0; i < projects.length; ++i){
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    
    let pimage = document.createElement("div");
    pimage.classList = "pimage";
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
    icon.src = "tab-plus.svg";
    icons.appendChild(icon);

    let gitHub = document.createElement("i");
    gitHub.classList = "devicon-github-original colored";
    icons.appendChild(gitHub);

    pinfo.appendChild(icons);

    projectDiv.appendChild(pinfo);

    let description = document.createElement("p");
    description.classList = "description";
    description.textContent = projects[i].description;
    projectDiv.appendChild(description);

    projectsDiv.appendChild(projectDiv);
}