function init() {
    renderFunction();
    getFromLocalStorage();
}

function renderFunction() {
    bookRef.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        if (filter == "all") {
            renderBooks(i);
        }
        if (filter == "like" && books[i].liked == true) {
            renderBooks(i);
        }
    }
}

function renderBooks(i) {
    bookRef.innerHTML += getBooksTemplate(i);
    renderHeartIcon(i);

    let commentRef = document.getElementById(`bookComments${i}`);
    commentRef.innerHTML = "";

    if (books[i].comments.length > 0) {
        for (let m = books[i].comments.length - 1; m >= 0; m = m - 1) {
            commentRef.innerHTML += getCommentsTemplate(i, m);
        }
    }
}

function addComment(index) {
    let inputRef = document.getElementById(`inputComment${index}`).value;

    if (inputRef != "") {
        let obj = [{ name: "DA User", comment: inputRef }];

        books[index].comments.push(obj);

        console.log(books[index]);
        saveToLocalStorage();
    }
    renderFunction();
    inputRef.value = "";
}

function renderHeartIcon(index) {
    heartRef = document.getElementById(`like${index}`);
    heartRef.innerHTML = "";

    if (books[index].liked == true) {
        heartRef.innerHTML += getFilledHeartIconTemplate(index);
    }
    if (books[index].liked == false) {
        heartRef.innerHTML += getHeartIconTemplate(index);
    }
}

function setFavorite(index) {
    if (books[index].liked == false) books[index].liked = true;
    else if (books[index].liked == true) books[index].liked = false;

    setLikes(index);
    renderFunction();
    saveToLocalStorage();
}

function setLikes(index) {
    if (books[index].liked == true) {
        books[index].likes = books[index].likes + 1;
    }
    if (books[index].liked == false) {
        books[index].likes = books[index].likes - 1;
    }
    saveToLocalStorage();
}

function setFilterToAll() {
    filter = "all";
    filterRef = document.getElementById(`filterAll`);
    RemoveRef = document.getElementById(`filterLiked`);
    filterRef.classList.add(`activAll`);
    RemoveRef.classList.remove(`activLiked`);
    renderFunction();
    saveToLocalStorage();
}

function setFilterToFav() {
    filter = "like";
    filterRef = document.getElementById(`filterLiked`);
    RemoveRef = document.getElementById(`filterAll`);
    filterRef.classList.add(`activLiked`);
    RemoveRef.classList.remove(`activAll`);
    renderFunction();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("filter", JSON.stringify(filter));
}

function getFromLocalStorage() {
    let loadedData = "";
    loadedData = JSON.parse(localStorage.getItem("books"));
    if (loadedData != null) {
        books = loadedData;
    }
    loadedData = "";
    loadedData = JSON.parse(localStorage.getItem("filter"));
    if (loadedData != null) {
        filter = loadedData;
    }
    if (filter == "") setFilterToAll();
    if (filter == "all") setFilterToAll();
    if (filter == "like") setFilterToFav();
}
