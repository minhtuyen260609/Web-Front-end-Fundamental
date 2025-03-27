const foods = [
    {
        id: 'bunbohue',
        name: 'Bún bò Huế',
        img: 'https://i1-dulich.vnecdn.net/2016/01/19/BunboHue-3287-1453173334.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ReFPwOC6uvlOESYtJTcpyQ'
    },
    {
        id: 'phobo',
        name: 'Phở bò Hà Nội',
        img: 'https://i.ex-cdn.com/giadinhonline.vn/files/content/2021/04/11/pho-bo-ha-noi-3-16504537.jpg'
    },
    {
        id: 'comtam',
        name: 'Cơm tấm Sài Gòn',
        img: 'https://sakos.vn/wp-content/uploads/2024/09/bia.jpg'
    }
];

function loadLikes() {
    return JSON.parse(localStorage.getItem('likes')) || {};
}

function saveLikes(likes) {
    localStorage.setItem('likes', JSON.stringify(likes));
}

function renderFoods() {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';
    const likes = loadLikes();

    foods.forEach(food => {
        const div = document.createElement('div');
        div.className = 'food-container';
        div.innerHTML = `
            <img src="${food.img}" alt="${food.name}" class="food-img">
            <h3>${food.name}</h3>
            <p>❤️ <span id="like-count-${food.id}">${likes[food.id] || 0}</span> lượt thích</p>
            <button class="like-btn" onclick="likeFood('${food.id}')">Thích +1</button>
        `;
        foodList.appendChild(div);
    });
}

function likeFood(foodId) {
    const likes = loadLikes();
    likes[foodId] = (likes[foodId] || 0) + 1;
    saveLikes(likes);
    document.getElementById(`like-count-${foodId}`).innerText = likes[foodId];
}

window.onload = renderFoods;