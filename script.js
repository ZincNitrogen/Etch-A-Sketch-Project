let main = document.querySelector("main");
let div = document.querySelector("div")
let sectionContainer = document.querySelector(".section-flex-container");
let sectionGroup = document.querySelectorAll(".section-flex-container");


for (let i = 0; i <= 16; i++){
    let clone = div.cloneNode(true);
    sectionContainer.append(clone);
};



for (let i = 0; i<= 16; i++ ) {
    let clone = sectionContainer.cloneNode(true);
    main.append(clone);
};



//TODO: some sort of event delegation for the "hover" part of the project





