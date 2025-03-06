let numberArray = [2, 5, 7, 4, 1, 8, 6]
let n = +prompt("Nhập một số bất kì:")
let a = 1
for (let i = 0; i < numberArray.length; i++) {
    if (n == numberArray[i]) {
        a = 0
    }
}
if (a == 1) {
    console.log("Chúc bạn may mắn lần sau")
} else {
    console.log("Bingo")
}