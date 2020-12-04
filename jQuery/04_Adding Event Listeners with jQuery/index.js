$("h1").click(function (){
    let Time = new Date();
    if(Time.getSeconds()%2==0){
        $("h1").css("color","red")
    }else{
        $("h1").css("color","blue")
    }
})

