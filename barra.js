
document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.getElementById('range4');
    const rangeOutput = document.getElementById('rangeValue');
    const cards = document.querySelectorAll('.card');
    const botoesFiltro = document.querySelectorAll('.filtro');


    const precos = {
        "chocolate": 25.99,
        "chocolate2": 25.99,
        "bala": 9.99,
        "bala2": 3.90,
        "bolo": 59.99,
        "bolo2": 100.00,
        "pirulito": 18.99,
        "pirulito2": 16.50,
        "paodemels": 4.99,
        "paodemel2": 22.50,
        "bebidas": 16.99,
        "bebidas2": 29.90
    };

    let categoriaAtiva = 'todos';

    function formatar(valor) {
        return "R$ " + Number(valor).toFixed(2).replace(".", ",");
    }

    function aplicarFiltros() {
        const precoMaximo = parseFloat(rangeInput.value);
        rangeOutput.textContent = formatar(precoMaximo);

        cards.forEach(card => {

            const precoItem = precos[card.id] || 0;


            const categoriaBotao = categoriaAtiva.replace('s', ''); // remove 's' de 'balas' para achar 'bala'
            const bateCategoria = (categoriaAtiva === 'todos') || card.id.includes(categoriaBotao);


            const batePreco = precoItem <= precoMaximo;

            if (bateCategoria && batePreco) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }


    rangeInput.addEventListener('input', aplicarFiltros);


    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function () {
            categoriaAtiva = this.id;
            aplicarFiltros();
        });
    });


    aplicarFiltros();
});