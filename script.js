const addTaskpop = document.getElementById("pop-up");
const main = document.getElementById("MainContainer");
const noitem = document.getElementById("noitem");
const pop2 = document.getElementById("dropup2");
const itembox = document.getElementById("box");
const center = document.getElementById("center");
const header = document.querySelector("header");
const header2 = document.getElementsByClassName("task-List");
let count = 0;
let start = 0;

function showtask() {
  count++;
  main.setAttribute("class", "first");
  let addTaskpop = document.getElementById("pop-up");
  addTaskpop.setAttribute("class", " drop popupbox");
  addTaskpop.classList.remove("hide");
  itembox.classList.add("first");
  if (count >= 1) {
    noitem.style.display = "none";
  }
}

const newadd = document.getElementById("Add");
const newcard = document.getElementById("newcard");
const newcard2 = document.getElementById("cardnew2");
const back1 = document.getElementsByClassName("backbutton");
const tittle5 = document.getElementById("tasklist");
const tittle6 = document.getElementsByClassName("button1");
const blank = document.getElementsByClassName("blank");
const button4 = document.getElementsByClassName("button4");

function cardAdd() {

  count++;
  itembox.classList.remove("first");
  
  var cardnew1 = document.createElement("div");
  var cardtitle = document.createElement("h2");
  var hrline = document.createElement("hr");
  var itemlist = document.createElement("div");
  var deletebutton = document.createElement("button");
  var addnewbtn = document.createElement("button");


  cardtitle.style.marginLeft = "30%";
  
  deletebutton.classList.add("btn3");
  addnewbtn.classList.add("btn4");
  cardnew1.classList.add("cards");
  hrline.classList.add("hrlines")

  console.log(start);
  cardnew1.setAttribute("id", start);
  cardnew1.appendChild(cardtitle);
  cardnew1.appendChild(hrline);
  cardnew1.appendChild(itemlist);
  cardnew1.appendChild(deletebutton);
  cardnew1.appendChild(addnewbtn);
  itembox.appendChild(cardnew1);

 

  cardtitle.innerText = newcard.value;
  deletebutton.classList.add("delete");
  addnewbtn.classList.add("add1");
  addTaskpop.classList.add("hide");
  main.classList.remove("first");

  addnewbtn.addEventListener("click", () => {
    cardnew1.style.height = "auto";
    createItempopup(itemlist);
  });
  deletebutton.addEventListener("click", () => {
    cardnew1.remove();
  });

  function createItempopup(itemlist) {

    var tittle2 = document.createElement("h3");
    let body = document.querySelector("body");
    let popupbox2 = document.createElement("div");
    let tittle3 = document.createElement("h2");
    let input3 = document.createElement("input");
    let Add2 = document.createElement("button");
    let close2 = document.createElement("button");


    popupbox2.classList.add("popupbox2");
    Add2.classList.add("Add2")
    close2.classList.add("close2");
    popupbox2.style.display = "block";


    input3.setAttribute("id", "cardnew2");
    tittle3.innerText = "Add the  List";
    tittle2.innerText = input3.value;


    Add2.innerText = "Add";

    close2.innerText = "close";

    itemlist.appendChild(tittle2);
    body.appendChild(popupbox2);
    popupbox2.appendChild(tittle3);
    popupbox2.appendChild(input3);


    popupbox2.appendChild(Add2);
    popupbox2.appendChild(close2);

    Add2.addEventListener("click", () => {
      const p = document.createElement("p");
      var markdone = document.createElement("button");

      p.classList.add("inline");
      tittle2.innerText = input3.value;
      popupbox2.style.display = "none";
      
      itemlist.appendChild(p);
      p.appendChild(tittle2);
      p.appendChild(markdone);

      itemlist.classList.add("space");
      markdone.innerText = "Done";
      markdone.classList.add("mark");
      itembox.classList.remove("first");

      markdone.addEventListener("click", () => {
        Done();
      });
      function Done() {
        tittle2.style.textDecoration = "line-through";
        tittle2.style.color = "red";
        tittle2.style.fontWeight = "bolder";
        markdone.remove();
      }
    });
    close2.addEventListener("click", () => {
      popupbox2.remove();
      console.log(itembox.childNodes);

    });
  }
  cardtitle.addEventListener("click", () => {
    itembox.style.display = "none";
    center.style.display = "block";
    center.appendChild(cardnew1);
    center.style.display = "flex";
    header.style.display = "block";
    tittle5.style.display = "none";
    tittle6[0].style.display = "none";
    blank[0].innerText = cardtitle.innerText;
  });

  back1[0].addEventListener("click", () => {
    backbutton();
  });

  function backbutton() {
    console.log("Hii");
    center.style.display = "none";
    center.innerText = " ";
    itembox.appendChild(cardnew1);
    itembox.style.display = "flex";
    itembox.style.flexDirection = "row";
    itembox.style.justifyContent = "space-between";
    header.style.display = "none";
    tittle5.style.display = "block";
    tittle6[0].style.display = "block";
  }
}

function closetask() {
  addTaskpop.setAttribute("class", "dropdown drop hide");
  main.classList.remove("first");
}
