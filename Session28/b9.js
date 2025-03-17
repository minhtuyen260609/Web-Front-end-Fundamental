const library = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K Rowling",
        year: 2000,
        price: 10,
        isAvailable: true,
    },
    {
        id: 2,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 2010,
        price: 20,
        isAvailable: false,
    },
    {
        id: 3,
        title: "Cạnh Tranh",
        author: "Thầy Hữu Giang",
        year: 2024,
        price: 5,
        isAvailable: true,
    },
];
let menu =
    `
----------MENU----------
1. Thêm sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách theo tiêu đề
4. Cập nhật trạng thái mượn/trả sách theo id sách
5. Xóa sách theo id sách 
6. Sắp xếp sách theo giá tăng dần
7. Thoát
Mời bạn nhập sự lựa chọn của bạn:
`
let input

while (input !== 7) {
    input = +prompt(menu)
    switch (input) {
        case 1:
            let title = prompt("Mời nhập tiêu đề sách")
            let author = prompt("Mời nhập tên tác giả")
            let year = prompt("Mời nhập năm xuất bản")
            let price = prompt("Mời nhập giá sách")
            let isAvailable = prompt("Mời nhập trạng thái sách")
            let book = {
                id: Math.random(),
                title,
                author,
                year,
                isAvailable,
            }
            library.push(book)
            displayBook()
            break;
        case 2:
            displayBook()
            break;
        case 3:
            let searchTitle = prompt("MỜi bạn nhập tiêu đề cần tìm")
            let findIndex = search("title", searchTitle)
            if (findIndex === -1) {
                console.log("Không có quyển sách nào với tiêu đề: " + searchTitle)
            } else {
                displayOneBook(library[findIndex], findIndexb)
            }
            break;
        case 4:
            let searchId = +prompt("Mời bạn nhập vào id quyển sách cần cập nhật:")
            let updateIndex = search("id", searchId)
            if (updateIndex = -1) {
                console.log("Không tìm thấy quyển sách nào với id này như trên")
            } else {
                library[updateIndex].price = prompt("Mời bạn nhập vào giá cập nhật")
                library[updateIndex].isAvailable = prompt("Mời bạn nhập vào trạng thái cập nhật")
                displayOneBook(library[updateIndex], updateIndex)
            }
            break;
        case 5:

            break;
        case 6:

            break;
        case 7:
            console.log("")
            break;
        default:
            break;
    }
}
function displayBook() {
    library.forEach(function (book, index) {
        console.log(`Quyển sách ${index + 1}: `)
        console.log("Id sách:", book.id)
        console.log("Tiêu đề:", book.title)
        console.log("Tác giả:", book.author)
        console.log("Giá:", book.price)
        console.log("Trạng thái:", book.isAvailable)
        console.log("Năm xuất bản", book.year)
        console.log("-----------------------")
    })
}
function displayOneBook(book, index) {
    console.log(`Quyển sách ${+index + 1}: `)
    console.log("Id sách:", book.id)
    console.log("Tiêu đề:", book.title)
    console.log("Tác giả:", book.author)
    console.log("Giá:", book.price)
    console.log("Trạng thái:", book.isAvailable)
    console.log("Năm xuất bản", book.year)
    console.log("-----------------------")
}
function search(key, value) {
    let findIndex = -1
    for (let i in library) {
        if (value === library[i][key]) {
            findIndex = 1
            break
        }
    }
    return findIndex
}