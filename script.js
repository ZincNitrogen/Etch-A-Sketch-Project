
let newGridBtn = document.querySelector(".new-grid-btn");
let toggleGridLineBtn = document.querySelector(".toggle-grid-btn");
let playSnakeBtn = document.querySelector(".snake-btn");

let whole = document.querySelector(".whole");
let sketchArea = document.querySelector(".sketchArea");


function gridPrompt() {

    let userInput;

    do {
        userInput = Number(prompt("Enter a whole number between 1 and 100 to create a square grid.\n(Ex: '8' creates an 8x8 grid)\nNote: any number out of bounds will default to a 16x16 grid. ", 2));
        //this either returns a number or NaN
        console.log(typeof(userInput), userInput) ;


        if (isNaN(userInput) == true){
            confirm("Whole numbers only please!");

        }else if (userInput > 100 || userInput < 1) {
            userInput = 16;
        }

    } while (isNaN(userInput) == true); //i need the loop to run unless A) a number is returned, b) null is returned

    
    return userInput;


}






function createGrid(userInput = 2) {

    let fixedTotalArea = 500**2;


    let totalSubdivisions = userInput**2 ;
    let areaPerSubdivision = (fixedTotalArea/totalSubdivisions);  


    let lengthAndWidthOfSubdivisions = (Math.sqrt(areaPerSubdivision));


    /*console.log(typeof(totalSubdivisions), totalSubdivisions);
    console.log(typeof(areaPerSubdivision), areaPerSubdivision);
    console.log(typeof(lengthAndWidthOfSubdivisions) , lengthAndWidthOfSubdivisions);*/

    //create subdivisions



    function paintSubdivision() {
        

        for (let subdivision = 0; subdivision < (totalSubdivisions); subdivision++) {

            let div = document.createElement("div");
            div.setAttribute("class", "divs");
            div.style.border = "1px solid blue";

            div.style.width = `${lengthAndWidthOfSubdivisions}px`;
            div.style.height = `${lengthAndWidthOfSubdivisions}px`;


            whole.append(div);
        }
    
    
    
    }


    paintSubdivision();


};



//Events

sketchArea.addEventListener("mouseover", (e) => {
    console.log("working");
    console.log(e);

    if (e.target.className == "divs") {
        e.target.style.backgroundColor = "red";
        e.target.stopPropogation;


    }

//TODO HERE: MAKE IT SO IT STOPS PAINTING WHEN SHIFT + MOUSEOVER OCCURS.
//make it do that a user can play the snake game without ruining their drawing unless the snake eats something
    

});


newGridBtn.addEventListener("click", () => {
    console.log("here");
    
});

//*****WE ARE HERE. NEED TO MAKE BUTTONS OPERATIONAL */










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