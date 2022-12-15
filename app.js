
var toggle=document.querySelector(".toggle");
var topNav=document.querySelector(".nav-mobile");
var navMobile=document.getElementsByClassName("nav-mobile")[0];
var foot=document.querySelectorAll(".footer-ul li a")

toggle.addEventListener('click',function(){
    console.log("clicked");
    topNav.classList.toggle("none")
    
});
function  choice() {
    document.querySelector(".choice").style.display="block"
  }
var date=document.querySelector(".date span");
var time =new Date().getHours();
var mintes =new Date().getMinutes();
if(mintes<10){mintes="0"+mintes;}
if(time<15){
     date.innerHTML="morning"
}
else {
    date.innerHTML="Evening"
}
document.querySelector('.time span').innerHTML=time+":"+mintes;
document.querySelector(".light").addEventListener("click",function(){
    document.querySelector(".choice").style.display="none";
})


//for darck mode 
document.querySelector(".dark").addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor="#010101";
    document.querySelector("body div").style.Color="#010101 !important";
    document.querySelector(".choice").style.display="none";
    document.querySelector("nav").style.backgroundColor="black";
    document.querySelector("#footer").style.color="white";
    document.querySelector("nav ").style.color="white";
    document.querySelector("#home").style.backgroundImage="linear-gradient(to bottom ,black,#01010100), url(images/home.jpg)";
    document.querySelector(".toggle ").style.border="3px solid white";
    document.querySelector("#feature").style.backgroundImage="linear-gradient(to bottom ,black,#01010100), url(images/home.jpg) ";
    document.querySelector("#blog").style.backgroundImage="linear-gradient(to bottom ,black,#01010100), url(images/home.jpg) ";
    var x=document.querySelectorAll('nav  ul li a');
    for (let index = 0; index < x.length; index++) {
        x[index].style.color="white";
    }
    var y=document.querySelectorAll('.maintitle');
    for (let index = 0; index < y.length; index++) {
        y[index].style.color="#ececec";
        
    }
    var z=document.querySelectorAll('.secondtitle');
    for (let index = 0; index < z.length; index++) {
        z[index].style.color="#F0ECE2";
        
    }
    var a=document.querySelectorAll('.btn-da');
    for (let index = 0; index < a.length; index++) {
        a[index].style.backgroundColor="#F2A365";
        a[index].style.boxShadow="0 5px 20px #F2A365";

        
    }
    var bg_light=document.querySelectorAll(".bg-light");
    for (let index = 0; index < bg_light.length; index++) {
        bg_light[index].style.backgroundColor="#222831";

        
    }
    var footerUls=document.querySelector(".footer-ul")
    console.log(footerUls)

    var darkBox=document.querySelectorAll(".dark-box");
    for (let index = 0; index < darkBox.length; index++) {
        darkBox[index].style.boxShadow="1px 2px 12px 1px white";
        // darkBox[index].style.background="black"
        
    }
    navMobile.style.backgroundColor="black";
    for (let index = 0; index < foot.length; index++) {
        foot[index].style.color="white";
        
    }
    document.querySelector(".copy").style.color="white"
        
   
   

})