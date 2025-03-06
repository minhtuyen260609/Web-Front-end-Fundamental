let arr = []
let sc = 0
let sl = 0
for (let i = 0; i < 5; i++) {
    arr.push(i)
    if (arr[i] % 2 == 0) {
        sc += i
    } else {
        sl += i
    }
}
alert(` Tổng các số chẵn: ${sc} tổng các số lẻ ${sl}`)