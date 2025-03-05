let sc = 0
let sl = 0
for (let i = 0; i < 5; i++) {
    let n = +prompt("Nhập số bất kì")
    if (n % 2 == 0) {
        sc += 1
    } else {
        sl += 1
    }
}
alert(`Có ${sc} số chẵn và ${sl} số lẻ.`)