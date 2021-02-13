$(".square.covered").click(function(event) {
    var square = $(event.currentTarget);
    square.removeClass("covered");
    square.addClass("uncovered");
    
    if (square.hasClass("bomb")) {
      alert("GAME OVER");
    }
});

$(".reset-button").click(function() {
    $(".square").removeClass("uncovered");
    $(".square").addClass("covered");
});