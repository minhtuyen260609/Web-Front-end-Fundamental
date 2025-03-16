let n = +prompt(`Moi nhap so luong so: `);
if (isNaN(n) || n <= 0) {
    alert(`So luong so khong hop le`);
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Moi nhap phan tu thu ${i + 1}`);
        if (isNaN(num)) {
            alert(`Phan tu thu ${i + 1} khong hop le`);
            i--;
            continue;
        }
        arr.push(num);
    }

    let num = +prompt(`Moi nhap so phan tu chua trong mang con: `);
    if (isNaN(num) || num <= 0) {
        alert(`So khong hop le`);
    } else {
        let arr2 = newArr(arr, num);
        console.log(arr2);
    }
}

function newArr(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i, i + num));
    }
    return result;
}