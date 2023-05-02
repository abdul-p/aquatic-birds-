import Data from "./data.js";



function displayTypes(data) {
  let typ, div2, h2, p2, bt , type , Cp , pgbt;
  typ = data.types;
  div2 = document.createElement("div");

    Cp = 1 ;

  type = typ.length / 3
      
    console.log(typ , type);
      let start, end , dt;
      Cp--;
      start =  type * Cp;
      end = start + type;
      console.log(typ[2]);
  
     dt = typ.splice( start , end);
     console.log(dt);
     for (const typp of dt ) {

    const { id , name, text } = typp;
    console.log(id);
    
    let div;

    // create new element
    div = document.createElement("div");
    h2 = document.createElement("h2");
    p2 = document.createElement("p");
    bt = document.createElement("button");
    pgbt = document.createElement("button"); 

    // add child content
    h2.innerText = name;
    p2.innerText = text;
    bt.innerText = "Read More...";

    // append child element
    p2.insertAdjacentElement("beforeend", bt);
    div.appendChild(h2);
    div.appendChild(p2);
    div.appendChild(pgbt);

    // add classlist
    div2.classList.add("div2");
    p2.classList.add("p");
    h2.classList.add("h2");
    bt.classList.add("bt");
    div.classList.add("di-typ");
    pgbt.classList.add('pgbt');

    // append parent element
    div2.appendChild(div);
    document.querySelector(".data-p").appendChild(div2);
    console.log(div2.className);
    pgbt.addEventListener('click', () => {
      Cp += 1 ;
  })

  }
};


function displayData(data, dom, head, type) {
  data.forEach((cur) => {
    if (type === cur.id) {
      dom.innerText = "";
      //  console.log(cur.id);
      head.innerText = cur.name;
      let p = document.createElement("p");
      p.innerText = cur.def;
      p.className = "data-p";
      dom.insertAdjacentElement("afterbegin", p);
      if (cur.types) {
        displayTypes(cur);
      
      }
    }
  });
}

const page = (function () {
  let list, dom, head;
  dom = document.getElementById("data-dis");
  head = document.getElementById("data-head");
  // toggle the content element
  document.getElementById("content").addEventListener("click", () => {
    let lists = document.getElementById("lists");
    if (lists.style.display === "none") {
      lists.style.display = "block";
    } else {
      lists.style.display = "none";
    }
  });

  // get and display content element data
  list = document.getElementById("lists");
  list.addEventListener("click", (e) => {
    let type = e.target.id;
    //     console.log(type);
    displayData(Data, dom, head, type);
  });
})();
