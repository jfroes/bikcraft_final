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

const resultContainerForn = document.getElementById("resultContainer-forn");
const resultContainerFab = document.getElementById("resultContainer-fab");

const fornecedoresTitulo = document.getElementById("fornecedores-titulo");
const fabricantesTitulo = document.getElementById("fabricantes-titulo");

const cardFabricante = document.querySelectorAll(".card_fabricantes");
const cardFornecedores = document.querySelectorAll(".card_fornecedores");

const slider = document.getElementById("cards-marcas");
const sliderForn = document.getElementById("wrapper-fornc-mat-prima");

// Adicione um listener de evento para capturar eventos de digitação (evento keyup)
inputField.addEventListener("keyup", function (event) {
  // Obter o valor do campo de entrada
  var inputValue = event.target.value;

  // Loop através de cada elemento
  let elementsResultadoFab = "";
  let elementsResultadoForn = "";

  if (inputValue.length >= 2) {
    for (const element of customCardAssocElements) {
      // Encontre o elemento .titulo_card_nome_empresa dentro do elemento custom_card_assoc atual
      const titleElement = element.querySelector(".titulo_card_nome_empresa");

      // Verifique se o titleElement existe e contém a sequência desejada
      if (inputValue === "") {
        // Se o campo de entrada estiver vazio, exiba todos os elementos novamente
        slider.style.display = "block";
        sliderForn.style.display = "block";
        resultContainerFab.style.display = "none";
        resultContainerForn.style.display = "none";
        fabricantesTitulo.style.display = "none";
        fornecedoresTitulo.style.display = "none";

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

        if (element.classList.contains("card_fabricantes")) {
          slider.style.display = "none";
          sliderForn.style.display = "none";
          element.style.display = "block";
          elementsResultadoFab += element.outerHTML;
          fabricantesTitulo.style.display = "block";
          resultContainerFab.style.display = "flex";
          fornecedoresTitulo.style.display = "none";
        } else if (element.classList.contains("card_fornecedores")) {
          slider.style.display = "none";
          sliderForn.style.display = "none";
          element.style.display = "block";
          elementsResultadoForn += element.outerHTML;
          fornecedoresTitulo.style.display = "block";
          resultContainerForn.style.display = "flex";
          fabricantesTitulo.style.display = "none";
        } else if (
          element.classList.contains("card_fornecedores") &&
          element.classList.contains("card_fabricantes")
        ) {
          slider.style.display = "none";
          sliderForn.style.display = "none";
          element.style.display = "block";
          elementsResultadoFab += element.outerHTML;
          fabricantesTitulo.style.display = "block";
          resultContainerFab.style.display = "flex";

          slider.style.display = "none";
          sliderForn.style.display = "none";
          element.style.display = "block";
          elementsResultadoForn += element.outerHTML;
          fornecedoresTitulo.style.display = "block";
          resultContainerForn.style.display = "flex";
        } else {
          console.log("Error writing routine.");
        }
      }
    }
  } else {
    slider.style.display = "block";
    sliderForn.style.display = "block";
    fabricantesTitulo.style.display = "none";
    fornecedoresTitulo.style.display = "none";

    customCardAssocElements.forEach((elem) => {
      elem.style.display = "block";
    });
  }
  resultContainerFab.innerHTML = elementsResultadoFab;
  resultContainerForn.innerHTML = elementsResultadoForn;
});

/*
document.addEventListener("DOMContentLoaded", function () {
        const customCards = document.querySelectorAll('.custom-card-assoc');

        customCards.forEach(function (element) {
            element.addEventListener('click', function () {
                this.classList.toggle('is-active');
            });
        });
    });

*/
