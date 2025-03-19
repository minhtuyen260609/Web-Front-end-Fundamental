let colorBoxes = document.querySelectorAll('.color-box');
colorBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        document.body.style.backgroundColor = box.style.backgroundColor;
    });
});
