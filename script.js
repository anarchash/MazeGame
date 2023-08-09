function changeValue(marginType, step) {
    if (marginType == "left") {
        const newLeftMargin = Number(document.getElementById("counter").style.marginLeft.replace("vw","")) + step
        document.getElementById("counter").style.marginLeft = newLeftMargin.toString() + "vw"
    } else if (marginType == "top") {
        const newTopMargin = Number(document.getElementById("counter").style.marginTop.replace("vh","")) + step
        document.getElementById("counter").style.marginTop = newTopMargin.toString() + "vh"
    }
}

var speed = 0
function speedily(speedScale) {
    if (dir == "right" || dir == "left") {
        speed = speedScale;
    } else if (dir == "up" || dir == "down") {
        speed = speedScale * 2;
    }
}
setInterval(speedily,0.1,0.05)

var dir = "down";

function move() {
    if (dir == "right") {
        changeValue("left", speed)
    } else if (dir == "left") {
        changeValue("left", -1 * speed)
    } else if (dir == "up") {
        changeValue("top", -1 * speed)
    } else if (dir == "down") {
        changeValue("top", speed)
    }
}

function bounce() {
    if (Number(document.getElementById("counter").style.marginLeft.replace("vw","")) < 1) {
        dir = "right";
    } else if (Number(document.getElementById("counter").style.marginLeft.replace("vw","")) > 95) {
        dir = "left";
    } else if (Number(document.getElementById("counter").style.marginTop.replace("vh","")) < 1) {
        dir = "down";
    } else if (Number(document.getElementById("counter").style.marginTop.replace("vh","")) > 94) {
        dir = "up";
    }
}

var movement = setInterval(move, 1)

setInterval(bounce, 10)

addEventListener("keydown", (input) => {
    if (input.code == "ArrowUp") {
        dir = "up"
    } else if (input.code == "ArrowDown") {
        dir = "down"
    } else if (input.code == "ArrowLeft") {
        dir = "left"
    } else if (input.code == "ArrowRight") {
        dir = "right"
    }
})

addEventListener("keydown", (input) => {
    if (input.keyCode == 32) {
        playAgain()
    }
})

function playAgain() {
    location.reload()
}