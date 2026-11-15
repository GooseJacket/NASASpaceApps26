const M = document.getElementById("mars");
const C = document.getElementById("ceres");
const D = document.getElementById("dawn");

function sourcesSwap(){
    const S = document.getElementById("sources");
    if (S.style.display == "none"){
        S.setAttribute("display", "block")
    } else {
        S.setAttribute("disply", "none")
    }
}


