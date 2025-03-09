let arr = ["JavaScript", 0, null, true, 7, ""];
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        arrNew.push(arr[i])
    }
}
console.log(`[${arrNew}]`);