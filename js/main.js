
var element = document.querySelector('#hedha').style.backgroundColor = "blue";
var element = document.querySelector('#hedha').style.fontSize = "2em";
var element = document.querySelector('#haha').setAttribute("src","http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Pomeranian-1.jpg")
var element = document.querySelector('#hi').innerHTML = "ssss";


// function weight(){
    $("#btn1").click(function(){
        $("#jj").css("font-weight", "bold")
    });
// }

//function Style(){
    $("#btn2").click(function(){
      $("#jj").css("font-style", "italic")
    });
      
// }
//function textDecoration(){
    $("#btn3").click(function(){
        $("#jj").css("text-decoration", "underline")
    } );
// }
//function couleur (){
    $("#aa").change(function(){
    var x=$( "#aa option:selected" ).text();
    
    console.log(x)
    $("#jj").css('color',x)
});
//}

//function taille (){
    $("#ii").change(function(){
    var y=$("#ii option:selected").text()
    $("#jj").css('font-size',y)
    });
//}









