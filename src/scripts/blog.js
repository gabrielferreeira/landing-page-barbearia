blog = () => {
    const posts = document.querySelector('.post');

    post.map((item) => {
        posts.innerHTML += `
        
            <div class="postItens">

                <div class="postImg">
                    <img src="src/imagens/`+ item.img + `" alt="">
                </div>

                <div class="postText">
                    <h3 class="title">`+ item.title + `</h3>
                    <p class="postDescricao">`+ item.descricao + `</p>
                </div>

            </div>
        
        `;
    })
}

blog();