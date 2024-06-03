
let newGridBtn = document.querySelector(".new-grid-btn");
let toggleGridLineBtn = document.querySelector(".toggle-grid-btn");
let playSnakeBtn = document.querySelector(".snake-btn");
playSnakeBtn.toggleAttribute("hidden", "true");
let lsdModeBtn = document.querySelector(".lsd-mode-btn");
let eraserBtn = document.querySelector(".eraser-btn");
let lsdtext = document.querySelector(".lsd-mode-btn").textContent;
let clearBtn = document.querySelector(".clear-btn");
let whole = document.querySelector(".whole");
let sketchArea = document.querySelector(".sketchArea");
let allDivs = document.querySelectorAll(".divs");
let colorisID = document.querySelector('#clr-color-value');
let colorField = document.querySelector(".color-field");










function gridPrompt() {

    //this function prompts the user for a number which will be used to create the unform fixed grid.

    let userInput;

    do {
        userInput = Number(prompt("Enter a whole number between 2 and 100 to create a square grid.\n(Ex: '8' creates an 8x8 grid)\nNote: any number out of bounds will default to a 16x16 grid. ", 16));
        //this either returns a number or NaN
        console.log(typeof(userInput), userInput) ;


        if (isNaN(userInput) == true){
            confirm("Whole numbers only please!");

        }else if (userInput > 100 || userInput < 2) {
            userInput = 16;
        }

    } while (isNaN(userInput) == true); //i need the loop to run unless A) a number is returned, b) null is returned

    
    return userInput;


}





function createGrid(userInput = 16) {
    
    let fixedTotalArea = 500**2;
    let totalSubdivisions = userInput**2 ;
    let areaPerSubdivision = (fixedTotalArea/totalSubdivisions);  
    let lengthAndWidthOfSubdivisions = (Math.sqrt(areaPerSubdivision));



    /*console.log(typeof(totalSubdivisions), totalSubdivisions);
    console.log(typeof(areaPerSubdivision), areaPerSubdivision);
    console.log(typeof(lengthAndWidthOfSubdivisions) , lengthAndWidthOfSubdivisions);*/
        

    for (let subdivision = 0; subdivision < (totalSubdivisions); subdivision++) {

        let div = document.createElement("div");
        div.setAttribute("class", "divs");
        div.style.border = "1px solid blue";

        div.style.width = `${lengthAndWidthOfSubdivisions}px`;
        div.style.height = `${lengthAndWidthOfSubdivisions}px`;


        whole.append(div);
    
    }

    
   

};

function clearGrid() {

    allDivs = document.querySelectorAll(".divs");


    for (let i of allDivs) {
        i.remove();
    }    


};

function clearColor() {
    allDivs = document.querySelectorAll(".divs");

    for (let i of allDivs) {
        i.style.backgroundColor = "transparent";
    } 
}

function toggleGridLine() {
    allDivs = document.querySelectorAll(".divs");

    
    for (let i of allDivs) {

        if (i.style.border != "medium"){
            console.log(i.style.border)
            i.style.border = "none";
            console.log(i.style.border)

        }else if (i.style.border == "medium") {
            i.style.border = "1px solid blue";
        }



    } 
};


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };


//Events






let pickedColor = "red";

//colorpicker
document.addEventListener('coloris:pick', event => {
    console.log("entered");
    pickedColor =  event.detail.color;

    console.log(pickedColor);
    return pickedColor;

});

//TODO HERE: MAKE IT SO IT you have to hold and drag to paint color.
//make it do that a user can play the snake game without ruining their drawing unless the snake eats something
//make it so that a button to play tick-tack toe appears if user selects a 3x3 grid
  //cursor should toggle between x and o for user to select a box in which to put symbol inside.




let tileColor = "red";
let modeFlag = 0;

sketchArea.addEventListener("mouseover", (e) => {
    console.log("working");
    console.log(e);

    if (e.target.className == "divs" && modeFlag == 0) {
        e.target.style.backgroundColor =  pickedColor;
        e.target.stopPropogation;

    } else if (e.target.className == "divs" && modeFlag == 1){
        e.target.style.backgroundColor = `rgb(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)})`;
        e.target.stopPropogation;


    } else if (e.target.className == "divs" && modeFlag == 2) {
        e.target.style.backgroundColor = "transparent";
        e.target.stopPropogation;
    } 



    console.log(modeFlag);






  

});




newGridBtn.addEventListener("click", () => {
    clearGrid();
    createGrid(gridPrompt());



});

toggleGridLineBtn.addEventListener("click", () => {

    toggleGridLine();
} );



lsdModeBtn.addEventListener("click", (e) => {

    if (modeFlag == 0) {
        modeFlag = 1;
        e.target.textContent = "Sober Mode"

    } else if (modeFlag == 1) {
        modeFlag = 0;
        e.target.textContent = lsdtext;
        e.target.style.backgroundColor = "rainbow";

    }

    console.log(modeFlag);


});



let oldModeFlag;

eraserBtn.addEventListener("click", (e) => {



    if (modeFlag == 0){
        modeFlag += 2;
        oldModeFlag = "sober"
        e.target.style.color = tileColor;
    } else if (modeFlag == 1) {
        modeFlag += 1
        oldModeFlag = "lsd"
        e.target.style.color = tileColor;


    } else if (modeFlag == 2 && oldModeFlag == "sober") {
        modeFlag -= 2;
        e.target.style.color = "black";

    } else if (modeFlag == 2 && oldModeFlag == "lsd") {
        modeFlag -= 1;
        e.target.style.color = "black";

    }

    console.log(oldModeFlag, modeFlag);


   
});


clearBtn.addEventListener("click", () => {

    clearColor();

});









createGrid();






/*

a uniform fixed-grid is a structure whose fixed area is divided equally among/by the x and y axis'



can i create an equasion to tell me the correct block amount/subdivision amount/ per block area of 
a fixed area to create a uniform fixed grid?



length = 500px
width = 500px
Total Fixed Area = 250,000px

assume i want a 2x2 grid in this area

i know i will need 4 total subdivisions and thay the area per subdivision will be 62,500px
with the length and width of each sudivision being 250px seperately.


i know the above info from manually calculating it, but can i give a formula to figure
all that out from just knowledge of the total area, the fact that the area is a square,
and the dimensions of the desired grid?

given a) total area, b) the fact that our area is a square c) dimensions of desired grid


total subdivisions = subsection length * subsection y
area per subdivision = total area/total subdivisions
length and width of each subdivision = sqrt(area per subdivision)



*/