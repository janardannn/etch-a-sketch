// const parentDiv = document.querySelector(".parent-div");
const parentDiv = document.querySelector(".parent-div");
parentDiv.style.display = "grid";
parentDiv.style.gridTemplateColumns = "repeat(8, 1fr)";
parentDiv.style.gridTemplateRows = "repeat(8, 1fr)";

for (var i = 0; i < 64; i++) {
  var newChildDiv = document.createElement("div");
  newChildDiv.classList.add("child-div");
  newChildDiv.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#8e2db8";
  });
  newChildDiv.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#f389ca";
  });
  parentDiv.appendChild(newChildDiv);
}

