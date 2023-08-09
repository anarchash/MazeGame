function createBlocks(sqrtNumberOfBlocks) {
    var verticalBlockSize = 96.3/sqrtNumberOfBlocks
    var horizontalBlockSize = 97.9/sqrtNumberOfBlocks
    for (i=0;i<sqrtNumberOfBlocks**2;i++) {
        const newDiv = document.createElement("div")
        newDiv.id = i.toString()
        document.getElementById("outer").appendChild(newDiv)
        document.getElementById(i.toString()).style.boxSizing = "borderBox";
        document.getElementById(i.toString()).style.height = verticalBlockSize + "vh";
        document.getElementById(i.toString()).style.width = horizontalBlockSize + "vw";
        document.getElementById(i.toString()).style.marginLeft = (i-(i%sqrtNumberOfBlocks))/sqrtNumberOfBlocks*horizontalBlockSize + "vw";
        document.getElementById(i.toString()).style.marginTop = i % sqrtNumberOfBlocks * verticalBlockSize + "vh";
        document.getElementById(i.toString()).style.backgroundColor = "orange";
        // document.getElementById(i.toString()).style.border = "orange 1px solid";
        document.getElementById(i.toString()).style.position = "absolute";
    }
}