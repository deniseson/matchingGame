/**
 * Created by denise.son447 on 11/16/16.
 */
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");



//FUNCTION
function generateFaces() {
    for (i = 0; i < numberOfFaces; ++ i) {
        elem_img = document.createElement("img");
        elem_img.src = "face.png";
        elem_img.style.top = Math.floor(Math.random() * 401) + "px";
        elem_img.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(elem_img);
}//End of Function
generateFaces();

