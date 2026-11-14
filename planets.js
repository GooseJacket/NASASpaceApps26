const canvas = document.getElementById("cnvs");
const ctx = canvas.getContext("2d");

//Mars
ctx.fillStyle = "Tomato";
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.lineWidth = 0;
ctx.stroke();
ctx.fill();