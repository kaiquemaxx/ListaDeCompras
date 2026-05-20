const input = document.getElementById("new-item-input")
const button = document.querySelector(".add-item")
const form = document.querySelector(".add-item-form")
const list = document.querySelector(".list ul")
const notification = document.querySelector(".notification")
const closeNotificationButton = document.querySelector(".delete button")

notification.style.display = "none"

function addItem() {
    const itemText = input.value.trim()

    if (itemText === ""){
        return
    }

    const li = document.createElement("li")

    li.innerHTML = ` 
        <div class="checkbox-text">
            <div class="checkbox">
                <input type="checkbox" name="valor1" class="checkbox-valor">
                <img src="assets/icons/Vector.svg" alt="icone de certo">
            </div>
            <p>${itemText}</p>
        </div>
        <div class="trash">
            <img src="assets/icons/trash.svg" alt="ícone de lixeira">
        </div>
    `

    list.append(li)

    input.value = ""
}


button.addEventListener("click", () => {
    addItem()
})


form.addEventListener("submit", (event) => {
    event.preventDefault()

    addItem()
})

list.addEventListener("click", (event) => {
    const trash = event.target.closest(".trash")

    if (trash){
        const item = trash.closest("li")

        item.remove()

        notification.style.display = "flex"
    }
})

closeNotificationButton.addEventListener("click", () => {
    notification.style.display = "none"
})