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

const slider = document.getElementById("cards-marcas");
const sliderForn = document.getElementById("wrapper-fornc-mat-prima");

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
        sliderForn.style.display = "block";
        resultContainer.style.display = "none";
        customCardAssocElements.forEach((elem) => {
          elem.style.display = "block";
        });
        break;
      } else if (
        titleElement &&
        titleElement.textContent
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      ) {
        // Se a sequência for encontrada, exiba apenas oS elementoS correspondenteS
        customCardAssocElements.forEach((elem) => {
          elem.style.display = "none";
        });

        slider.style.display = "none";
        sliderForn.style.display = "none";
        element.style.display = "block";
        elementsResultado += element.outerHTML;
        resultContainer.style.display = "flex";
      }
    }
  } else {
    slider.style.display = "block";
    sliderForn.style.display = "block";
    customCardAssocElements.forEach((elem) => {
      elem.style.display = "block";
    });
  }
  resultContainer.innerHTML = elementsResultado;
});
