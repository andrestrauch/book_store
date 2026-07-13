function renderBooks() {
    let bookRef = document.getElementById(`MyBooks`);
    bookRef.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        bookRef.innerHTML += getBooksTemplate(i);

        let commentRef = document.getElementById(`bookComments${i}`);
        commentRef.innerHTML = "";

        if (books[i].comments.length > 0) {
            for (let m = books[i].comments.length - 1; m > 0; m = m - 1) {
                commentRef.innerHTML += /*html*/ `
                <div class="comments">
                    <p class="comment-user">[${books[i].comments[m].name}]</p>
                    <p class="book-comment">:${books[i].comments[m].comment}</p>
                <div>
                `;
            }
        }
    }
}
function addComment(index) {
    let inputRef = document.getElementById(`inputComment${index}`).value;

    if (inputRef != "") {
        let obj = [{ name: "", comment: "" }];

        obj.name = "Andre";
        obj.comment = inputRef;
        books[index].comments.push(obj);

        renderBooks();
    }
    document.getElementById(`inputComment${index}`).value = "";
}
