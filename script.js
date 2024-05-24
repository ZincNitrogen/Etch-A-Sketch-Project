let main = document.querySelector("main");
let div = document.querySelector("div")
let sectionContainer = document.querySelector(".section-flex-container");


for (let i = 0; i <= 16; i++){
    let clone = div.cloneNode(true);
    sectionContainer.append(clone);
};



for (let i = 0; i<= 16; i++ ) {
    let clone = sectionContainer.cloneNode(true);
    main.append(clone);
};







