var tempsvg = document.createElement("svg");
tempsvg.hidden = true;
var pattern = trianglify({
    width: 1920,
    height: 1080,
});
pattern.toSVG(tempsvg);
var tempa = document.createElement("a");
const head = "data:text/plain;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg'";
var date = new Date();
var timestamp = date.getFullYear() + "." + date.getMonth() + "." + date.getDay() + "_" + date.getHours() + date.getMinutes() + date.getSeconds();
tempa.href = head + " width='1920' height='1080'>" + tempsvg.innerHTML + "</svg>";
tempa.download = "trianglify-free-res-" + timestamp + ".svg";
document.body.appendChild(tempa);
tempa.click();
tempa.remove();