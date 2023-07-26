const addTaskpopup = document.getElementById("popbox")
const cardContainer =  document.getElementById("card-container")
let popupTaskVisible = false

////***   togal form  */

// function showtask(){
//     if(popupTaskVisible){
//         addTaskpopup.classList.add("hide-box")
//         popupTaskVisible = false
//     }else{
//     addTaskpopup.classList.remove("hide-box")
//     popupTaskVisible = true
//     }
// }

function showtask(){
    addTaskpopup.classList.remove("hide-box")
    popupTaskVisible = true 
}

function closepopupbox(){
    addTaskpopup.classList.add("hide-box")
    popupTaskVisible = false
}

function addCard(){
    var newCard = document.createElement("div")
    var cardTitle = document.createElement("h2")
    var hrline = document.createElement("hr")
    var itemlist = document.createElement("div")
    var deletebutton = document.createElement("button")
    var additem = document.createElement("button")

    newCard.classList.add("cards")
    hrline.classList.add("hrlines")

    newCard.appendChild(cardTitle)
    newCard.appendChild(hrline)
    newCard.appendChild(itemlist)
    newCard.appendChild(deletebutton)
    newCard.appendChild(additem)
    cardContainer.appendChild(newCard)

    cardTitle.innerText = "this is card"
    deletebutton.innerText = "delete"
    additem.innerText = "+"

}