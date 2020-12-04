$("img").attr("src", "http://www.eligibilite.isolezvous-france.fr/Images/resizedImage-no-bg.png")

$("input").keypress(function (event) {
    console.log(event.key)
})


let str="";

$(document).keydown(function(event){
    str+= event.key
    console.log(str)
    $("h1").text(str)
    if(event.key === 'BackSpace'){
        alert("Test")
    }
})
