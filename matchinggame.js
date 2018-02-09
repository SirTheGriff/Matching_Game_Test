var pictures = [
	"green",
	"blue",
	"red"
]

var temp;
var newSquares = pictures

for (var i = 0; i < pictures.length; i++) {
	var squares = document.createElement("div");
	squares.classList = "square";
	squares.style.background = pictures[i];
	document.getElementById("container").appendChild(squares);
}

var nodeList = document.querySelectorAll(".square")
var arraynodeList = []
for (var i = 0; i < pictures.length; i++){
	arraynodeList.push(nodeList[i]);
	arraynodeList[i].style.background = "black";
	
}

function click() {
	for (var i = 0; i < arraynodeList.length; i++) {
		arraynodeList[i].addEventListener("click", function() {
		this.style.background = pictures[1];
		});
	}	
};


