const pattern = trianglify({
    width: 1920,
    height: 1080
});
document.body.appendChild(pattern.toCanvas());
var b = document.getElementsByTagName("canvas");
b.id = "result";