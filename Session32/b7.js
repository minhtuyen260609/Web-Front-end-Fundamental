const thumbnails = document.querySelectorAll('.thumbnail')
const overlay = document.getElementById('overlay')
const largeImage = document.getElementById('largeImage')

thumbnails.forEach(thumbnail => {
    thumbnail.onclick = () => {
        largeImage.src = thumbnail.src
        overlay.classList.add('active')
    }
})

overlay.onclick = () => {
    overlay.classList.remove('active')
    largeImage.src = ""
};
