let choose, len;
let arr=[];
function add(){
    len=+prompt('nhap so luong phan tu trong danh sach');
    for(let i=0; i<len; i++){
        arr[i]=+prompt('nhap so nguyen thu '+(i+1));
    }
}
function arit(){
    let sum=arr.reduce((acc, val)=>acc+val);
    let arit=sum/len;
    console.log(arit);
    return arit;
}
function max(){
    let num=arr.filter((val)=>val%2==0);
    let max= Math.max(...num);
    console.log(num);
    console.log(max);
    return ;
}
function min(){
    let num=arr.filter((val)=>val%2!=0);
    let min=Math.min(...num);
    console.log(min);
    return ;
}
do{
    console.log('1. Nhap danh sach so nguyen');
    console.log('2. Tinh trung binh cac so');
    console.log('3. Tim so chan lon nhat');
    console.log('4. Tim so le nho nhat');
    console.log('5. Thoat');
    choose=+prompt('lua chon cua ban');
    switch(choose){
        case 1: 
            add();
        break;
        case 2: 
            arit();
        break;
        case 3: 
            max();
        break;
        case 4: 
            min();
        break;
        case 5: 
            console.log('Thoat chuong trinh');
        break;
    }
}while(choose!=5)