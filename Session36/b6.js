let selectedRating = 0;

// Lấy tất cả các phần tử sao
const stars = document.querySelectorAll(".stars");
const selectedRatingText = document.getElementById("selected-rating");

// Lặp qua mỗi phần tử sao để gán sự kiện click
stars.forEach(star => {
    star.addEventListener("click", function () {
        selectedRating = parseInt(this.getAttribute("data-value"));
        updateStars(selectedRating);
        selectedRatingText.innerText = "Bạn đã đánh giá " + selectedRating + " sao.";
    });
});

// Hàm cập nhật màu sắc các sao dựa vào số sao đã chọn
function updateStars(rating) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute("data-value"));
        if (starValue <= rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

// Hàm xử lý gửi bình luận
function submitReview() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (selectedRating === 0) {
        alert("Vui lòng chọn đánh giá sao cho sản phẩm!");
        return;
    }

    if (commentText === "") {
        alert("Vui lòng nhập bình luận!");
        return;
    }

    // Tạo chuỗi hiển thị sao (ví dụ: ★★★★☆)
    let starsDisplay = "";
    for (let i = 0; i < selectedRating; i++) {
        starsDisplay += "★";
    }
    // Nếu muốn hiển thị đầy đủ 5 sao, có thể bổ sung sao trống (☆)
    for (let i = selectedRating; i < 5; i++) {
        starsDisplay += "☆";
    }

    // Tạo phần tử li để chứa bình luận
    const li = document.createElement("li");
    li.innerHTML = "<span>" + starsDisplay + "</span> <b>" + commentText + "</b>";

    // Thêm bình luận vào danh sách
    document.getElementById("comment-list").appendChild(li);

    // Reset lại input bình luận và đánh giá (nếu muốn)
    commentInput.value = "";
    selectedRating = 0;
    updateStars(0);
    selectedRatingText.innerText = "Bạn chưa đánh giá.";
}