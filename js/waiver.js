document.addEventListener("DOMContentLoaded", function() {
    var figList = document.getElementsByTagName("figure");
    for (i = 0; i < figList.length; i++) {
            figList[i].classList.add("one-third");
    }
})
        
var footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", function() {
    var parent = document.getElementById("maincontent");
    parent.removeChild(footer);
})
        
var fog = document.getElementsByTagName("img")[5];
fog.addEventListener("dblclick", function() {
    document.getElementsByTagName("figure")[4].style.visibility = "hidden";
})
        
var cap = document.getElementsByTagName("figcaption")[0];
var orin = cap.style;

function change() {
    cap.style.fontFamily = "Cursive";
}

function back() {
    cap.style = orin;
}

cap.addEventListener("mouseover", change)
cap.addEventListener("mouseout", back)
cap.setAttribute("tabindex", "0");
cap.addEventListener("focus", change)
cap.addEventListener("blur", back)