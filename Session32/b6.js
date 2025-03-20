let fontSize = 16
document.getElementById("increase").onclick = () => {
    fontSize += 2
    document.getElementById("text").style.fontSize = fontSize + "px"
};

document.getElementById("decrease").onclick = () => {
    fontSize -= 2
    document.getElementById("text").style.fontSize = fontSize + "px"
};