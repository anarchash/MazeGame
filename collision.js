function checkCollisionOrWin(sqrtNumberOfBlocks) {
    var currentLeftPosition = Number(document.getElementById("counter").style.marginLeft.replace("vw",""))
    var currentTopPosition = Number(document.getElementById("counter").style.marginTop.replace("vh",""))
    var counterWidth = Number(document.getElementById("counter").style.width.replace("vw",""))
    var counterHeight = Number(document.getElementById("counter").style.height.replace("vh",""))
    var divWidth = Number(document.getElementById("1").style.width.replace("vw",""))
    var divHeight = Number(document.getElementById("1").style.height.replace("vh",""))
    for (var i=0;i<sqrtNumberOfBlocks**2;i++) {
        var leftDivPosition = Number(document.getElementById(i.toString()).style.marginLeft.replace("vw",""))
        var topDivPosition = Number(document.getElementById(i.toString()).style.marginTop.replace("vh",""))
        if (list.includes(i) == false && i!=200) {
            if (((leftDivPosition - counterWidth - 1.05 < currentLeftPosition) && (currentLeftPosition < leftDivPosition + divWidth) && (topDivPosition - counterHeight - 1 < currentTopPosition) && (currentTopPosition < topDivPosition + divHeight))) {
                gameOver(i);
            }
        } else if (i==200) {
            if (((leftDivPosition - counterWidth - 1.05 < currentLeftPosition) && (currentLeftPosition < leftDivPosition + divWidth) && (topDivPosition - counterHeight - 1 < currentTopPosition) && (currentTopPosition < topDivPosition + divHeight))) {
                youWin()
            }
        }
    }
}
setInterval(checkCollisionOrWin, 0.1,20)

function gameOver(ruined) {
    document.getElementById(ruined).style.backgroundColor = "grey"
    document.getElementById("gameOverSign").style.display = "block";
    document.getElementById("gameOverSign").style.visibility = "visible";
    document.getElementById("button").style.display = "block";
    document.getElementById("button").style.visibility = "visible";
    clearInterval(movement)
}

function youWin() {
    document.getElementById("youWin").style.display = "block";
    document.getElementById("youWin").style.visibility = "visible";
    document.getElementById("button").style.display = "block";
    document.getElementById("button").style.visibility = "visible";
    clearInterval(movement)
}

document.getElementById("200").style.backgroundColor = "black";