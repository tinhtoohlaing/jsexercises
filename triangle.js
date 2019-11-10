

function printTriangle(line, ch="*") {
    var space = " ";

    for (i = 1; i < (2 * line); i += 2) {
        console.log(space.repeat(((2 * line) - i - 1) / 2) + ch.repeat(i) + space.repeat(((2*line) - i - 1) / 2));
    }
}

printTriangle(3)
console.log("\n")
printTriangle(5, "#")
console.log("\n")
printTriangle(10, "=")





