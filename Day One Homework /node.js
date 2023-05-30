function changeBackground(){
    let colors = ["red", "cyan", "blue", "green", "yellow", "purple", "pink", "orange", "white", "PaleGreen"]
    let num = Math.floor( Math.random() * 10);
    let code = "linear-gradient(45deg, " + colors[num] + ", black)";

    document.getElementById("imageTab").style.background = code;
 }
