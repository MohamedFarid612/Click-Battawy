document.querySelector(".photo").addEventListener("click",function()
{
 var audio=new Audio("duck.mp3");
 audio.play();
 $(".photo").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
