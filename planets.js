const M = document.getElementById("mars");
const C = document.getElementById("ceres");
const D = document.getElementById("dawn");

function showInfo(id){
    document.getElementById("infobox").style.display = "block";
    document.getElementById("info-title").innerText = id;    
    document.getElementById("info").src = id+".html";
}
