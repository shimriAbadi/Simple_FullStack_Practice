$("img").attr("src", "http://www.eligibilite.isolezvous-france.fr/Images/resizedImage-no-bg.png")

$("h1").css("color", "red")

//Chain
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5 , margin:20});
})

/*
$("button").on("click", function(){
    $("h1").hide();
})

$("button").on("click", function(){
    $("h1").show();
})

$("button").on("click", function(){
    $("h1").toggle();
})

$("button").on("click", function(){
    $("h1").fadeOut();
})

$("button").on("click", function(){
    $("h1").fadeIn();
})

$("button").on("click", function(){
    $("h1").fadeToggle();
})

$("button").on("click", function(){
    $("h1").slideToggle();
})

$("button").on("click", function(){
    $("h1").animate({opacity:0.5 , margin:20});
})
*/