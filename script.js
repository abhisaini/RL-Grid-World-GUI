// function that builds a grid in the "container"
var x_coord = 0, y_coord = 0, gridsz = 4;

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(720/x);
    $(".grid").height(720/x);
	console.log(document.getElementsByClassName('grid').length);

};

function clearGrid(){
    $(".grid").remove();
};


function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

function color(i, j, gridsize, color){
	var grid  = document.getElementsByClassName('grid') ;
	// console.log(grid)
	grid[i * gridsize + j].style.background = color ;
}

function moveUp() {
	if(y_coord == 0){
		alert("invalid move") ;
		console.log("invalid move");
	}
	else{
		y_coord --;
		color(y_coord ,x_coord ,gridsz, "lightblue");
	}
}

function moveDown() {
	if(y_coord == gridsz - 1){
		alert("invalid move") ;
		console.log("invalid move");
	}
	else{
		y_coord ++;
		color(y_coord ,x_coord ,gridsz, "lightblue");
	}
}

function moveRight() {
	if(x_coord == gridsz - 1){
		alert("invalid move") ;
		console.log("invalid move");
	}
	else{
		x_coord ++;
		color(y_coord ,x_coord ,gridsz, "lightblue");
	}
}

function moveLeft() {
	if(x_coord == 0){
		alert("invalid move") ;
		console.log("invalid move");
	}
	else{
		x_coord --;
		color(y_coord ,x_coord ,gridsz, "lightblue");
	}
}
$(document).ready(function() {
    // createGrid(16);

    // $(".grid").mouseover(function() {
    //     $(this).css("background-color", "black");
    //     });


	createGrid(gridsz);



	color(x_coord ,y_coord ,gridsz, "lightgreen");


	Mousetrap.bind('up', function(e) {
		console.log(11);
		moveUp();
	});
	$(".up").click(function() {
		moveUp();
	});


	Mousetrap.bind('down', function(e) {
		moveDown();
	});
	$(".down").click(function() {
		moveDown();
	});

	Mousetrap.bind('right', function(e) {
		moveRight();
	});
	$(".right").click(function() {
		moveRight();
	});

	Mousetrap.bind('left', function(e) {
		moveLeft();
	});
	$(".left").click(function() {
		moveLeft();
	});

    // $(".newGrid").click(function() {
    //     refreshGrid();
	//
    //     $(".grid").mouseover(function() {
    //     $(this).css("background-color", "black");
    //     });
	//
    // });
});




// function mypath(){
// 	var grid  = document.getElementsByClassName('grid') ;
//
// }
