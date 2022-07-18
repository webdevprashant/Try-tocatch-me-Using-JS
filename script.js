    function showimginloop()  {
        img = document.getElementById("d1")
        w = Math.floor(Math.random() * document.documentElement.clientWidth)
        h = Math.floor(Math.random() * document.documentElement.clientHeight)        
        img.src = "images/animal" +  Math.floor(Math.random() * 5 , showimginloop)  + ".png"
        img.style.left = w - 100;
        img.style.right = h - 100;
        img.style.top = h - 100
        img.style.bottom = w - 100
        r = setTimeout(showimginloop , 1500)
}
finalscore = 0;
function scorecollect() {
    let i =  document.getElementById("d1");
    score = document.getElementById("myscore");
    i.addEventListener("click" , function ()  { finalscore++; })
    score.innerHTML = finalscore;
}

function stopgame() {
    clearTimeout(r)
    var imgadd = document.getElementById("d1")
    imgadd.style.display = "none";
    alert("Your Final Score is : " + finalscore)
}