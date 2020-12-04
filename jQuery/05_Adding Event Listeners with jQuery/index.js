$("img").attr("src", "http://www.eligibilite.isolezvous-france.fr/Images/resizedImage-no-bg.png")

$("input").keypress(function (event) {
    console.log(event.key)
})


let str="";

$(document).keypress(function(event){
    str+= event.key
    console.log(str)
    $("h1").text(str)
})

$(document).keydown(function(event){

if(event.which == 8){
    str="";
    $('h1').text(str)
}

})

$("h1").on("mouseover",function(){
    $("h1").css("color","green")
})

