
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let sketchArea = document.querySelector(".sketchArea");







function createGrid(userInput = 2) {

    let fixedTotalArea = 500**2;


    let totalSubdivisions = userInput**2 ;
    let areaPerSubdivision = fixedTotalArea/totalSubdivisions;
    let lengthAndWidthOfSubdivisions = Math.sqrt(areaPerSubdivision);

    console.log(totalSubdivisions);
    console.log(areaPerSubdivision);
    console.log(lengthAndWidthOfSubdivisions);

    //create subdivisions



    function paintSubdivision() {
        let counter = 0

        for (let subdivision = 0; subdivision < (totalSubdivisions/2); subdivision++) {

            let div = document.createElement("div");
            div.setAttribute("class", "divs");

            //div.style.border = "1px solid blue";

            div.style.width = `${lengthAndWidthOfSubdivisions}px`;
            div.style.height = `${lengthAndWidthOfSubdivisions}px`;


            left.append(div);
        }


        for (let subdivision = 0; subdivision < (totalSubdivisions/2); subdivision++) {

            let div = document.createElement("div");
            div.setAttribute("class", "divs");

            //div.style.border = "1px solid blue";

            div.style.width = `${lengthAndWidthOfSubdivisions}px`;
            div.style.height = `${lengthAndWidthOfSubdivisions}px`;


            right.append(div);
        }
    
    
    }


    paintSubdivision();


};


createGrid(100);


//Events

sketchArea.addEventListener("mouseover", (e) => {
    console.log("working");
    console.log(e);

    if (e.target.className == "divs") {
        e.target.style.backgroundColor = "red";
        e.target.stopPropogation;


    }
    




});













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