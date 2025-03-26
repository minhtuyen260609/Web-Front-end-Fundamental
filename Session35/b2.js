// Load bookmarks on page load
document.addEventListener('DOMContentLoaded', loadBookmarks);

function addBookmark() {
  const name = document.getElementById('websiteName').value.trim();
  const url = document.getElementById('websiteURL').value.trim();

  if (!name || !url) {
    alert('Please fill in both fields');
    return;
  }

  const bookmark = { name, url };

  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  document.getElementById('websiteName').value = '';
  document.getElementById('websiteURL').value = '';
  loadBookmarks();
}

function deleteBookmark(index) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  loadBookmarks();
}

function loadBookmarks() {
  const bookmarksContainer = document.getElementById('bookmarks-list');
  bookmarksContainer.innerHTML = '';
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  bookmarks.forEach((bookmark, index) => {
    bookmarksContainer.innerHTML += `
      <div class="bookmark">
        <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
        <button class="delete-btn" onclick="deleteBookmark(${index})">&times;</button>
      </div>
    `;
  });
}
