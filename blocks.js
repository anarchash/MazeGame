var numberOfBlocksChosen = 20

createBlocks(numberOfBlocksChosen)

function mouseOver(positionOrder) {
    document.getElementById(positionOrder.toString()).style.backgroundColor = "blue";
}

let newList = []

function checkHover(sqrtNumberOfBlocks) {
    for (var i=0;i<sqrtNumberOfBlocks**2;i++) {
        if (document.getElementById(i.toString()).matches(":hover") == true) {
            mouseOver(i)
            newList.push(i)
        }
    }
}

setInterval(checkHover, 0.1,numberOfBlocksChosen)

function removeDuplicates(listName) {
    uniqueList = []
    for (var i=0;i<listName.length;i++) {
        if (uniqueList.includes(listName[i]) == false) {
            uniqueList.push(listName[i])
        }
    }
    return uniqueList
}

function end() {
    finalList = removeDuplicates(newList)
    localStorage.setItem("newlist",finalList)
    location.href="main.html"
}