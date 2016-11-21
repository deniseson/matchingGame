var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

// Add new variable to the right side
var theRightSide = document.getElementById("rightSide");

//Variable points to the body
var theBody = document.getElementsByTagName("body")[0];


//FUNCTION
function generateFaces() {
    for (var i = 0; i < numberOfFaces; ++ i) {
        var elem_img = document.createElement("img");
        elem_img.src = "face.png";
        elem_img.style.top = Math.floor(Math.random() * 401) + "px";
        elem_img.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(elem_img);

    }//Part 3

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);




}//End of Function
generateFaces();

//Constructing a function which will be executed when the user clicks
// on the last child node in theLeftSide
theLeftSide.lastChild.onclick =

    function nextLevel (event) {

        // is necessary in order to ensure that
        //that the event does not also get applied to other elements
        //in the webpage, such as other faces. Preventing from triggering
        // the function multiple times
        event.stopPropagation();
        //increases the the number stored in numberOfFaces by 5
        numberOfFaces += 5;
        //new set of faces is generated, 5 more than before
        generateFaces();
    };

        //Clicks on anything except the correct face

        theBody.onclick = function gameOver() {
        //show a message to the user
            alert ("Game Over");
            //Nothing onwards nothing will happen when the user clicks
            //anywhere in the webpage
            theBody.onclick = null;
            //Nothing happens with the extra face
            theLeftSide.lastChild.onclick = null;

};
/**
 * Created by denise.son447 on 11/21/16.
 */
