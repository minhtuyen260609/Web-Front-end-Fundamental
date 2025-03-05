for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    console.log(`%cMàu sắc đã được thay đổi`, `color: rgb(${r}, ${g}, ${b})`)
}