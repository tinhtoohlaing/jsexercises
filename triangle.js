

function printTriangle(side, ch = "*", border = true) {
    var space = " ";

    for (i = 1; i < (2 * side); i += 2) {
        if (!border || i == 1 || i == (side * 2 - 1)) {
            console.log(space.repeat(((2 * side) - i - 1) / 2) + ch.repeat(i));
        } else {
            console.log(space.repeat(((2 * side) - i - 1) / 2) + ch + space.repeat(i - 2) + ch);
        }
    }
}

function printSquare(side, ch = "*",border=true) {
    var space = " ";


    for (i = 1; i <= side; i += 1) {
        if (!border || i == 1 || i == side) {
            console.log(ch.repeat(side));
        } else {
            console.log(ch + space.repeat(side - 2) + ch);
        }
    }
}


printSquare(7, "#", true)
console.log("\n")
printSquare(5, "@", false)





/*
    #
   # #
  #   #
 #     #
######### */