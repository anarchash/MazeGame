numberOfBlocksChosen = 20

createBlocks(numberOfBlocksChosen)

function setMap() {
    var listItems = localStorage.getItem("newlist").split(",")
    var list = []
    for (j=0;j<listItems.length;j++) {
        list.push(Number(listItems[j]))
    }
    return list
}
list=setMap()

function setPathColor(sqrtNumberOfBlocks) {
    for (i=0;i<sqrtNumberOfBlocks**2;i++) {
        if (list.includes(i)) {
        document.getElementById(i.toString()).style.backgroundColor = "white";
        }
    }
}
setPathColor(numberOfBlocksChosen)

function currentColor(number) {
    switch (number % 5) {
        case 0:
            return "blue"        
        case 1:
            return "green"        
        case 2:
            return "purple"        
        case 3:
            return "yellow"        
        case 4:
            return "orange"
    }
}
function changeColors(sqrtNumberOfBlocks) {
    var color = currentColor(Number(Date.now()))
    for (var j=0;j<sqrtNumberOfBlocks**2;j++) {
        if (list.includes(j) == false && j!=200) {
            document.getElementById(j.toString()).style.backgroundColor = color
        }
    }
}
setInterval(changeColors,700,numberOfBlocksChosen)