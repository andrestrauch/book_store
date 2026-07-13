function getBooksTemplate(index) {
    return /*html*/ `
    <article class="book">
        <h2>${books[index].name}</h2>
        <div class="book-img"></div>
        <section class="price-likes">
            <p class="price">${books[index].price} €</p>
            <div class="likes">
                <p>${books[index].likes}</p>
                <div class="like-icon">
                    <img src="./assets/icons/favorite.png" alt="Herz Icon">
                </div>
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
