// function that builds a grid in the "container"

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
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

$(document).ready(function() {
    // createGrid(16);

    // $(".grid").mouseover(function() {
    //     $(this).css("background-color", "black");
    //     });
	var x_coord = 0, y_coord = 0, gridsz = 6;


	createGrid(gridsz);

	function color(i, j, gridsize, color){
		var grid  = document.getElementsByClassName('grid') ;
		// console.log(grid)
		grid[i * gridsize + j].style.background = color ;
	}

	color(x_coord ,y_coord ,16, "lightgreen");

	Mousetrap.bind('up', function(e) {
		if(y_coord == 0){
			alert("invalid move") ;
			console.log("invalid move");
		}
		else{
			y_coord --;
			color(y_coord ,x_coord ,gridsz, "lightblue");
		}
	});

	Mousetrap.bind('down', function(e) {
		if(y_coord == gridsz - 1){
			alert("invalid move") ;
			console.log("invalid move");
		}
		else{
			y_coord ++;
			color(y_coord ,x_coord ,gridsz, "lightblue");
		}
	});

	Mousetrap.bind('right', function(e) {
		if(x_coord == gridsz - 1){
			alert("invalid move") ;
			console.log("invalid move");
		}
		else{
			x_coord ++;
			color(y_coord ,x_coord ,gridsz, "lightblue");
		}
	});

	Mousetrap.bind('left', function(e) {
		if(x_coord == 0){
			alert("invalid move") ;
			console.log("invalid move");
		}
		else{
			x_coord --;
			color(y_coord ,x_coord ,gridsz, "lightblue");
		}
	});

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    });
});




// function mypath(){
// 	var grid  = document.getElementsByClassName('grid') ;
//
// }
