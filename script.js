const addTaskpopup = document.getElementById("popbox");
// const main = document.getElementById("maincontainer")
const cardContainer =  document.getElementById("card-container");
const newCardname = document.getElementById("card-name");
// console.log(newCardname.parentNode);
// let noitem = document.getElementById("no-item");
// let cardID = 0;
// let start = 0;


function showtask(){
    // cardID++;
    // main.setAttribute("class","main");
    // const addTaskpopup = document.getElementById("popbox");
    // addTaskpopup.setAttribute("class","pop-up-box show");
    addTaskpopup.classList.remove("hide-box");
    // if(cardID >= 1){
    //     noitem.remove();
    // }
    // popupTaskVisible = true 

    // var mainContainer = document.createElement("div")
    // mainContainer.classList.add("Main-container")
}

function closepopupbox(){
    addTaskpopup.classList.add("hide-box")
    // popupTaskVisible = false
    // mainContainer.classList.add("Main-container")

}

function addCard(){

//     cardID++;
    var newCard = document.createElement("div")
    var cardTitle = document.createElement("h2")
    var hrline = document.createElement("hr")
    var itemlist = document.createElement("div")
    var additem = document.createElement("button")
    var deletebutton = document.createElement("button")
    

    
//     newCard.setAttribute("id", cardID)
    newCard.classList.add("cards")
    hrline.classList.add("hrlines")
    additem.classList.add("addlist")
    deletebutton.classList.add("delcard")


    newCard.appendChild(cardTitle)
    newCard.appendChild(hrline)
    newCard.appendChild(itemlist)
    newCard.appendChild(deletebutton)
    newCard.appendChild(additem)
    cardContainer.appendChild(newCard)
    

    cardTitle.innerText = newCardname.value
    deletebutton.innerText = " "
    additem.innerText = " "

    // addTaskpopup.classList.add("hide-box")
    // main.classList.remove("main")
    
    // additem.addEventListener("click",() => {
    //     cardnew.style.height = "auto"
    //     createItempopup("itemlist");
    // })

    // deletebutton.addEventListener("click",function(){
    //     newCard.remove()
    // });

    // function itempopup(itemlist){

    //     var itemtitle = document.createElement("h3");
    //     let body = document.querySelector("body");
    //     let itemsadd = document.createElement("div");
    //     let itemtitle2 = document.createElement("h2");
    //     let itemname = document.createElement("input");
    //     let itemaddbutton = document.createElement("button");
    //     let itemcloasebutton = document.createElement("button");


    //     itemsadd.classList.add("itemsadd")
    //     itemsadd.style.display = "block";
    //     itemname
    //     itemlist.appendChild(itemtitle);
    // }

    closepopupbox()

}
