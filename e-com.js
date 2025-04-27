let icon = document.querySelector(".bar-icon");
let options = document.querySelector("ul");
let bar = document.querySelector("#bar");

icon.addEventListener("click", () => {
  options.classList.toggle("showData");

  if (options.className == "showData") {
    bar.className = "fa-solid fa-xmark";
  } else {
    bar.className = "fa-solid fa-list-ul";
  }
});

//navbar

let shops = document.querySelector("#shops");
let reviews = document.querySelector("#reviews");
let blogs = document.querySelector("#blogs");
let contacts = document.querySelector("#contacts");

shops.addEventListener("click", () => {
  shops.style.color = "#4B70F5";
  reviews.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});

reviews.addEventListener("click", () => {
  reviews.style.color = "#4B70F5";
  shops.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});

blogs.addEventListener("click", () => {
  blogs.style.color = "#4B70F5";
  reviews.style.color = "white";
  shops.style.color = "white";
  contacts.style.color = "white";
});

contacts.addEventListener("click", () => {
  contacts.style.color = "#4B70F5";
  reviews.style.color = "white";
  shops.style.color = "white";
  blogs.style.color = "white";
});

//cards details js

let cards = document.querySelectorAll(".card");

let cardDetails = document.querySelector(".cardDetails");

let container = document.querySelector(".container");

let crdImg = document.getElementById("crdImg");

let buyBtn = document.getElementById("buyBtn");

let buyText = document.querySelector(".buyText");

let buyPage = document.querySelector(".buyPage");

cards.forEach(function (currVal) {
  currVal.addEventListener("click", function () {
    cardDetails.style.display = "flex";
    container.style.display = "none";

    let imgSrc = currVal.firstElementChild.src;
    crdImg.src = imgSrc;

    buyBtn.addEventListener("click", function () {
      buyPage.style.display = "block";
      buyText.innerHTML = `
                <h3>Enter Details :</h3><br>
        <input type="text" placeholder="Enter Your Name" id = "name"><br>
        <input type="text" placeholder="Enter Your Address" id = "address"><br>
        <input type="text" placeholder="Enter Your Mobile No." id = "num"><br><br>
        <h3>Payment Option :</h3><br>
        <select>
            <option value="GPay">Google Pay</option>
            <option value="Phone Pay">Phone Pay</option>
            <option value="Bharat Pay">Bharat Pay</option>
            <option value="COD">Cash On Delivery</option>
        </select><br>
        `;

        let btn = document.createElement("button");
        btn.innerText = "submit";
        buyText.appendChild(btn)

        btn.addEventListener("click", function() {
            let name = document.getElementById("name");
            let address = document.getElementById("address");
            let num = document.getElementById("num");
            if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Details.");
            } else{
                alert("Your Response Recorder.");
                buyPage.style.display = "none";
            }
        });

        let cross = document.querySelector(".cross");
        cross.addEventListener("click", function() {
            buyPage.style.display = "none";
        })
    });
  });
});


//connect

function connect(){
    let names = document.getElementById("names")
    
    let num = document.getElementById("number")

    if(names.value == "" && num.value == ""){
        alert("Fill Details.");
    } else{
        alert("Thank You For Connecting");
    }
}