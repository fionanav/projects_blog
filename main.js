function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll untuk melihat";
  document.getElementId("icon-up").style.display = "none";
  document.getElementId("icon-down").style.display = "block";
}
function DayMode() {
  document.querySelector("body").style.color = "black";
  document.querySelector("body").style.backgroundColor = "white";
}
function NightMode() {
  document.querySelector("body").style.color = "white";
  document.querySelector("body").style.backgroundColor = "black";
}
function changeImage(element) {
  element.setAttribute(
    "src",
    "https://i.pinimg.com/474x/75/9b/51/759b51ea919d0e5852f3c77857062caa.jpg"
  );
}
function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://i.pinimg.com/474x/60/5e/46/605e461ca634e868085d1a3d9d02b1ea.jpg"
  );
}

function changeText2() {
  document.querySelector(".jumbotron-title").innerHTML = "kambingggg!!!";
}

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  // Check the inputed value
  if (inputValue === "" || inputValue === "") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }
  // Clear text on the search bar
  document.getElementById("myInput").value = "";
  // Create button close
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");
  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
var btnSubmit = document.querySelector("submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute(
      "value",
      "https://projects-blog-320zthsrq-fionanavs-projects.vercel.app/contact.html"
    );
  });
}
