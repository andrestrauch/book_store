function getBooksTemplate(index) {
    return /*html*/ `
    <article class="book">
        <h2>${books[index].name}</h2>
        <div class="book-img">
            <!-- <img src="./assets/icons/book_cover.png" alt="Book Cover"> -->
            <img src="${books[index].cover}" alt="${books[index].name}" />
        </div>
        <section class="price-likes">
            <p class="price">${books[index].price} €</p>
            <div class="likes">
                <p>${books[index].likes}</p>
                <div class="like-icon" id="like${index}"></div>
            </div>
        </section>
        <section class="author-data">
            <table>
                <tr>
                    <th>Author :</th>
                    <td>${books[index].author}</td>
                </tr>
                <tr>
                    <th>Erscheinungsjahr :</th>
                    <td>${books[index].publishedYear}</td>
                </tr>
                <tr>
                    <th>Gengre :</th>
                    <td>${books[index].genre}</td>
                </tr>
            </table>
        </section>
        <section class="book-comments">
            <h3>Kommentare:</h3>
            <div class="comments" id="bookComments${index}"></div>
        </section>  
        <section class="input-field">
                <input id="inputComment${index}" class="comment-input" type="text"
                placeholder="Schreibe einen Kommentar">
                <div onclick="addComment(${index})" class="input-btn">
                    <img src="./assets/icons/send_icon.png" alt="Send Icon">
                </div>
            </section>
    </article>`;
}

function getCommentsTemplate(i, m) {
    return /*html*/ `
        <div class="comments">
            <p class="comment-user">[${books[i].comments[m].name}]</p>
            <p class="book-comment">:${books[i].comments[m].comment}</p>
        <div>
    `;
}

function getHeartIconTemplate(index) {
    return /*html*/ `
        <img onclick="setFavorite(${index})"
        src="./assets/icons/favorite.png" alt="Herz Icon"></img>
    `;
}

function getFilledHeartIconTemplate(index) {
    return /*html*/ `
        <img onclick="setFavorite(${index})"
        src="./assets/icons/red_heart_filled.png" alt="Herz Icon">
    `;
}
