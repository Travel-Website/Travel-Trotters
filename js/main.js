var myIndex = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    carousel();
    video1MouseHover()
    video2MouseHover()
    video3MouseHover()
    
});

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1;}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}


function video1MouseHover(){
    $("#video1").mouseenter(function(){
        $(this).attr("src",$(this).attr("src") + "?autoplay=1");
    });
    
    $("#video1").mouseleave(function(){
        var src= $(this).attr("src");
        var arr_str = src.split("?");
        $(this).attr("src",arr_str[0]);
    });
}

function video2MouseHover(){
    $("#video2").mouseenter(function(){
        $(this).attr("src",$(this).attr("src") + "?autoplay=1");
    });
    
    $("#video2").mouseleave(function(){
        var src= $(this).attr("src");
        var arr_str = src.split("?");
        $(this).attr("src",arr_str[0]);
    });
}

function video3MouseHover(){
    $("#video3").mouseenter(function(){
        $(this).attr("src",$(this).attr("src") + "?autoplay=1");
    });
    
    $("#video3").mouseleave(function(){
        var src= $(this).attr("src");
        var arr_str = src.split("?");
        $(this).attr("src",arr_str[0]);
    });
}

function myFunction() {
    alert("Thank you. We have received your form and we aim to respond back in 24 hours!");
  }


