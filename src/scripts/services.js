//FORMATAÇÃO DE MOEDA
const formated = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
});

service = () => {
    const planos = document.querySelector('.planos');

    services.map((item) => {
        planos.innerHTML += `
        
            <div class="planosItens">

                <div class="planosImg">
                    <img src="src/imagens/`+ item.img + `" alt="">
                </div>

                <div class="planosText">
                    <p class="nome">`+ item.nome + `</p>
                    <p class="precoDe">De: `+ formated.format(item.precoDe) + `</p>
                    <p class="precoPor">Por: `+ formated.format(item.precoPor) + `</p>
                    <p class="descricao">`+ item.descricao + `</p>
                </div>

            </div>
        
        `;
    })
}

service();