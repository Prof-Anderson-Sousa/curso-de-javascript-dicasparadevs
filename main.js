const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const message = document.querySelector(".msg");
const itens = document.querySelector(".itens");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        message.textContent = "Preencha os Campos Abaixo";
        message.style.color = "red";

        setTimeout(() => {
            message.remove();
        }, 3000);
        return;
    } else {
        message.textContent = "Cadastro Realizado Com Sucesso";
        message.style.color = "green";

        setTimeout(() => {
            message.remove();
        }, 3000);
    
    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br>Email: ${emailValue}`;

    itens.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";

    return;
}});