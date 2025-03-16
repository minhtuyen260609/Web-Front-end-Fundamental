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
alert(findMissing(arr))
function findMissing(arr){
let newArr = []
newArr= arr.sort()
let min = newArr[0]
let max = newArr[newArr.length-1]
let result =[]
    for(let i=min; i<=max; i++){
        if(!newArr.includes(i)){
            result.push(i)
        }
    }
    return result
}