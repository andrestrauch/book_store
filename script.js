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
        for (let m = books[i].comments.length - 1; m >= 0; m--) {
            commentRef.innerHTML += getCommentsTemplate(i, m);
        }
    }
}

function addComment(index) {
    let inputRef = document.getElementById(`inputComment${index}`).value;
    let obj = [{ name: "", comment: "" }];
    if (inputRef != "") {
        obj.name = "DA User";
        obj.comment = inputRef;

        console.log(books[index].comments.length);
        books[index].comments.push(obj);
        console.log(books[index].comments);
        renderFunction();
    }
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
    filterRef.classList.add(`activ-all`);
    RemoveRef.classList.remove(`activ-liked`);
    renderFunction();
    saveToLocalStorage();
}

function setFilterToFavorite() {
    filter = "like";
    filterRef = document.getElementById(`filterLiked`);
    RemoveRef = document.getElementById(`filterAll`);
    filterRef.classList.add(`activ-liked`);
    RemoveRef.classList.remove(`activ-all`);
    renderFunction();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("filterKey", JSON.stringify(filter));
    localStorage.setItem("bookKey", JSON.stringify(books));
}

function getFromLocalStorage() {
    let loadedData = "";
    loadedData = JSON.parse(localStorage.getItem("bookKey"));
    if (loadedData != null) {
        books = loadedData;
    }
    loadedData = "";
    loadedData = JSON.parse(localStorage.getItem("filterKey"));
    if (loadedData != null) {
        filter = loadedData;
    }
    if (filter == "") setFilterToAll();
    if (filter == "all") setFilterToAll();
    if (filter == "like") setFilterToFavorite();
}
