let n = +prompt(`Moi nhap so luong so: `)
    if(isNaN(n) || n<=0){
        alert(`So luong so khong hop le`)
    }
let arr =[]
for(let i = 0; i < n; i++){
    let num = +prompt(`Moi nhap phan tu thu ${i+1}`)
    if(isNaN(num)){
        alert(`Phan tu thu ${i+1} khong hop le`)
        i--
        continue
    }
    arr.push(num)
}
alert(checkNumber(arr))
function checkNumber(arr){
    let gap = arr[1]-arr[0]
    let check = true
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i+1]-arr[i] !== gap){
            check = false
    }
}
    return check
}