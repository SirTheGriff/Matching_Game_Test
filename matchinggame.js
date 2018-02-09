var pictures = [
	"green",
	"blue",
	"red",
	"yellow"
]

var temp;
var newSquares = pictures

for (var i = 0; i < pictures.length; i++) {
	var squares = document.createElement("div");
	squares.classList = "square";
	document.getElementById("container").appendChild(squares);
}

var nodeList = document.querySelectorAll(".square")
var arraynodeList = []
for (var i = 0; i < pictures.length; i++){
	arraynodeList.push(nodeList[i]);
	arraynodeList[i].addEventListener("click", function() {
		this.style.background = pictures[0];
		});
	
}

function click() {
	for (var i = 0; i < arraynodeList.length; i++) {
	}	
};


