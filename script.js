

const addTaskpopup = document.getElementById("popbox");
// const main = document.getElementById("maincontainer")
const cardContainer =  document.getElementById("card-container");
const newCardname = document.getElementById("card-name");
console.log(newCardname.parentNode);

// let noitem = document.getElementById("no-item");
let cardID = 0;
// let start = 0;
let additempopup = document.querySelector(".popup-box2");
console.log(additempopup)


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
    // mainContainer.classList.add("blurpage")
}

function addCard(){

    cardID++;
    var newCard = document.createElement("div")
    var cardTitle = document.createElement("h2")
    var hrline = document.createElement("hr")
    var itemlist = document.createElement("div")
    var additem = document.createElement("button")
    var deletebutton = document.createElement("button")
    

    
    newCard.setAttribute("id", cardID)
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

    deletebutton.addEventListener("click",function(){
        newCard.remove()
    });

    closepopupbox()

    
    let newitemadd = document.querySelector("addlist");
    let Itemid = 0;
    additem.addEventListener("click",function additem(){

        additempopup.classList.remove("hide-box");
        addTaskpopup.classList.add("show");

        function closepopupbox2(){
            additem.classList.remove("hide-box");
        }
        closepopupbox2()
        
        // Itemid++;
        // var newitem = document.createElement("div");
        // var boxname = document.createElement("h2");
        // var itemname = document.createElement("input");
        // var add = document.createElement("button");
        // var del = Document.createElement("button");

        // newitem.appendChild(h2)
        // newitem.appendChild(boxname)
        // newitem.appendChild(itemname)

        // newitem.classList.add("newitembox");
        // boxname.classList.add("boxname");
        // itemname.classList.add("itemlistname");
    })


    // const additempopup = document.getElementById("popbox2");

    // function showPopup2(){
    //     additempopup.classList.remove("hide-box");
    // }

    // function closepopupbox2(){
    //     additempopup.classList.add("hide-box")
    // }



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

    // closepopupbox()

}
