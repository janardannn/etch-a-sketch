const parentDiv = document.querySelector(".parent-div");

for (var i = 0; i < 10; i++) {
    var childDiv = document.createElement("div");
    childDiv.style.display = "flex";
    childDiv.style.flex = "1";

    for (var k = 0; k < 10; k++) {
        var newChild = document.createElement("div");
        newChild.setAttribute("class","child-div");

        childDiv.appendChild(newChild);
    }

    parentDiv.appendChild(childDiv);
}