// Função para remover a ação padrão do formulário
const submitButtons = document.getElementsByClassName("is-search-submit");
for (let i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
  });
}

// Referência ao campo de entrada
var inputField = document.getElementById("is-search-input-18548");

// Referência aos elementos do card
const customCardAssocElements = document.querySelectorAll(".custom-card-assoc");
const resultContainer = document.getElementById("resultContainer");

let slider = document.querySelector(".slider");

// Adicione um listener de evento para capturar eventos de digitação (evento keyup)
inputField.addEventListener("keyup", function (event) {
  // Obter o valor do campo de entrada
  var inputValue = event.target.value;

  // Loop através de cada elemento
  let elementsResultado = "";

  if (inputValue.length >= 2) {
    for (const element of customCardAssocElements) {
      // Encontre o elemento .titulo_card_nome_empresa dentro do elemento custom_card_assoc atual
      const titleElement = element.querySelector(".titulo_card_nome_empresa");

      // Verifique se o titleElement existe e contém a sequência desejada
      if (inputValue === "") {
        // Se o campo de entrada estiver vazio, exiba todos os elementos novamente
        slider.style.display = "block";
        resultContainer.style.display = "none";
        customCardAssocElements.forEach((elem) => {
          elem.style.display = "block";
        });
        break;
      } else if (
        titleElement &&
        titleElement.textContent.includes(inputValue)
      ) {
        // Se a sequência for encontrada, exiba apenas o elemento correspondente
        // TODO - Display none nos dois sliders
        // TODO copiar html do elemento de card para uma variável - let elementsResultado += element.innerHTML; -- verificar sintaxe
        customCardAssocElements.forEach((elem) => {
          elem.style.display = "none";
          slider.style.display = "none";
        });

        element.style.display = "block";

        elementsResultado += element.outerHTML;
        slider.style.display = "none";
        resultContainer.style.display = "block";

        // Saia do loop se desejar exibir apenas uma correspondência
      } else {
        // Se a sequência não for encontrada, exiba todos os elementos
        slider.style.display = "block";
        customCardAssocElements.forEach((elem) => {
          elem.style.display = "block";
        });
      }
      // TODO ao final do loop, mostrar todos os cards de resultado.
      // TODO quando apagar tudo do campo de pesquisa, LIMPAR a div de resultados, e display none nela
    }
  } else {
    slider.style.display = "block";
    customCardAssocElements.forEach((elem) => {
      elem.style.display = "block";
    });
  }
  resultContainer.innerHTML = elementsResultado;
});
