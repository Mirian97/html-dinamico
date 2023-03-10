const input = document.querySelector(".busca");
const root = document.querySelector("body");
const paises = document.querySelector(".paises")

fetch("https://restcountries.com/v2/all").then(resposta => {
    const promiseBody = resposta.json();

    promiseBody.then(body => {
        body.forEach(pais => {
            const div = document.createElement("div");
            div.classList.add("pais")

            const nome = document.createElement("h2");
            nome.textContent = pais.translations.pt;

            const regiao = document.createElement("span");
            regiao.textContent = "Região: " + pais.region;

            const br = document.createElement("br");

            const capital = document.createElement("span");
            capital.textContent = "Capital: " + pais.capital;

            const populacao = document.createElement("p");
            populacao.textContent = "População: " + pais.population;

            const bandeira = document.createElement("img");
            bandeira.src = pais.flag;

            div.append(nome, regiao, br, capital, populacao, bandeira);
            paises.append(div);
        })

        input.addEventListener("keydown", (event) => {
            if (event.key !== "Enter") return;

            const arrayPaises = document.querySelectorAll('.pais');
            const inputFormatado = input.value.toLowerCase();

            arrayPaises.forEach(pais => {
                const nome = pais.querySelector("h2");

                if (!nome.textContent.toLowerCase().includes(inputFormatado)) {
                    pais.classList.add('escondido');

                } else {
                    pais.classList.remove('escondido');
                }
            });
            input.value = "";
        })
    });
});



