var rand1 = (Math.floor(Math.random()*6))+1;
var d1name = "dice" + rand1 + ".png";
var d1src = "/Images/"+d1name;
var changedimage1 = document.querySelectorAll("img")[0];
changedimage1.setAttribute("src",d1src);

var rand2 = Math.floor(Math.random()*6)+1;
var d2name = "dice"+rand2+".png";
var d2src = "/Images/"+d2name;
var changedimage2 = document.getElementsByClassName("img2")[0];
changedimage2.setAttribute("src",d2src);

if(rand1 === rand2)
{
    document.querySelector("h1").textContent = "Both players have equal scores";
}
else if(rand1 > rand2)
{
    document.querySelector("h1").textContent = "Player one has the higher Score";
}
else
{
    document.querySelector("h1").textContent = "Player two has the higher Score";
}