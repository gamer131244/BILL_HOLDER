const Total = (visiable, value1, value2, moveable) => {
  
  if (!value1) {
    value1 = 0000;
  }
  if (!value2) {
    value2 = 0000;
  }
  
  
  var htmlTotal = `
   
     <div class="total-mana-wrapper">
    <div class="total-mana-class">
      <div class="total-main">
        <div class="total-title-class">
          <div class="total-title">
            <span>TOTAL</span>
          </div>
        </div>
        <div class="total-values-class">
          <div class="total-values">
            <div class="total-value-1">
              <span>${value1 > value2 ? value1 : value2}</span>
            </div>
            <div class="opreter-value-class">
              <div class="opreter-value">
                <span>+</span>
              </div>
            </div>
            <div class="total-value-2">
              <span>${value2 > value1 ? value1 : value2}</span>
            </div>
          </div>
        </div>
        <div class="total-equal-class">
          <div class="total-equal">
            <span>0000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
    <div class="total-mana-wrapper">
    <div class="total-mana-class mini-child">
      <div class="total-main">
        <div class="total-title-class">
          <div class="total-title">
            <span>Information</span>
          </div>
        </div>
        <div class="total-values-class">
          <div class="total-values">
            <div class="label-value" lang="ur">
              <label>:ڈائی کا خرچہ</label>
            </div>
            <div class="total-value-1">
              <span>${value1}</span>
            </div>
            <div class="label-value" lang="ur">
              <label>:کپڑے کا خرچہ</label>
            </div>
            <div class="total-value-2">
              <span>${value2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  <style>
  
  .header-total {
    display: flex;
    height: 100vh;
    padding: 0;
    margin: 0;
    width: 100vw;
    position: absolute;
    top: 0;
    pointer-events: none;
}

@font-face {
    font-family: "Poppins";
    src: url("/Poppins-Regular.ttf");
}


.total-mana-class {
    background: whitesmoke;
    padding: 1vw;
    display: flex;
    justify-content: center;
    width: 30vw;
    min-height: 40vw;
    border-radius: 1vw;
    box-shadow: -0.2vw -0.2vw, 0.2vw 0.2vw black;
    font-family: "Poppins" !important;
}


.total-mana-class .total-title {
    font-size: 6vw;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}


.opreter-value-class {
    position: absolute;
    left: -2vw;
    bottom: 0;
}

.opreter-value {
    position: relative;
}

.total-values {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    font-size: 5vw;
    padding-top: 2vw;
    width: 20vw;
}

.total-equal {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.4vw solid black;
    padding: 0.2vw;
    font-size: 5vw;
}


.total-mana-wrapper {
    position: absolute;
    transition: all 0.1s;
    pointer-events: auto;
    transform: scale(0.8);
}


.mini-child {
    min-height: 40vw !important;
}

.mini-child .total-value-1, .mini-child .total-value-2 {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
}



.mini-child .total-title {
    font-size: 4vw;
}


.label-value {
    font-size: 4vw;
    width: 28vw;
    font-family: "Noto";
    display: flex;
    justify-content: right;
    align-items: center;
}



  
  <style>
  
  
  
  
   
  `;
  var headerTotal = document.createElement("div");
  headerTotal.className = "header-total";
  headerTotal.innerHTML = htmlTotal;
  if (visiable) {
    document.body.appendChild(headerTotal);
    
    
    if (headerTotal) {
      
      
      if (moveable) {
        
        
        var totalWrapper = document.querySelectorAll(".total-mana-wrapper");
        
        totalWrapper.forEach((totalWrapper) => {
          var body = document.querySelector(".header-total");
          var startX = "";
          var startY = "";
          var clientX = "";
          var clientY = "";
          var slide = false;
          var bodyWidth = body.getBoundingClientRect().width;
          var bodyHeight = body.getBoundingClientRect().height;
          
          document.body.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            
          });
          
          document.body.addEventListener("touchmove", (e) => {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
            slide = true;
          });
          
          
          document.body.addEventListener("touchend", () => {
            slide = false;
            startX = 0;
            startY = 0;
            clientX = 0;
            clientY = 0;
          });
          
          
          totalWrapper.addEventListener("touchmove", () => {
            if (clientX < bodyWidth / 1.35 && clientY < bodyHeight / 1.12 && clientX > 45 && clientY > 90) {
              if (slide) {
                totalWrapper.style.left = clientX - totalWrapper.getBoundingClientRect().width / 4 + "px";
                totalWrapper.style.top = clientY - totalWrapper.getBoundingClientRect().height / 2 + "px";
                
                var perfectX = clientX - startX;
                
              }
            }
            
          });
        });
        
        
        
        
        
        
        
      }
      var value1 = document.querySelector(".total-value-1");
      var value2 = document.querySelector(".total-value-2");
      var evals = `${value1.innerText} + ${value2.innerText}`;
      var totalValue = eval(evals);
      document.querySelector(".total-equal span").innerText = totalValue;
      
      
    }
    
    
    
    
  } else {
    try {
      document.querySelector(".header-total").remove();
    } catch (e) {
      alert(e)
    }
  }
  
}













var idSaved = sessionStorage.getItem("menuID");

var ItemsSaved = localStorage.getItem(idSaved + "user") ? localStorage.getItem(idSaved + "user") : `[]`;


var mainItems = JSON.parse(ItemsSaved);

console.log(mainItems)

var childer = 0;


if (mainItems.length > 0) {
  mainItems.forEach((cards) => {
    var amount = document.createElement("span");
    var longDiscation = document.createElement("span");
    var dayi = document.createElement("span");
    var clothPrice = document.createElement("span");
    amount.className = "bill-opt";
    amount.id = "amount" + cards.id;
    longDiscation.className = "bill-opt";
    longDiscation.id = "long" + cards.id;
    dayi.className = "bill-opt";
    dayi.id = "dayi" + cards.id;
    clothPrice.className = "bill-opt";
    clothPrice.id = "cloth" + cards.id;
    amount.innerText = cards.amount;
    longDiscation.innerText = cards.longDiscation;
    dayi.innerText = cards.dayi;
    clothPrice.innerText = cards.clothPrice;
    document.getElementById("items-amount").appendChild(amount);
    document.getElementById("items-longDiscation").appendChild(longDiscation);
    document.getElementById("items-dayi").appendChild(dayi);
    document.getElementById("items-clothPrice").appendChild(clothPrice);
    childer = cards.id;
  });
  document.querySelectorAll(".bill-opt").forEach((bill) => {
    bill.setAttribute("contenteditable", true);
    bill.addEventListener("input", () => {
      //   localStorage.setItem(idSaved, userContent.innerHTML);
      var indexItem = mainItems.findIndex(crd => bill.id.replace(/[a-z]/g, "") - 1 == crd.id);
      console.log(indexItem + 1)
      //  var idOfrow = bill.id.replace(/[0-9]/, "");
      console.log(`#${bill.id}`)
      document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
        if (rowOfChnge.id.includes("amount")) {
          mainItems[indexItem + 1].amount = rowOfChnge.innerText;
          console.log(mainItems);
        }
        
      });
      
      
      
      document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
        if (rowOfChnge.id.includes("long")) {
          mainItems[indexItem + 1].longDiscation = rowOfChnge.innerText;
          console.log(mainItems);
        }
        
      });
      
      document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
        if (rowOfChnge.id.includes("dayi")) {
          mainItems[indexItem + 1].dayi = rowOfChnge.innerText;
          console.log(mainItems);
        }
        
      });
      
      document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
        if (rowOfChnge.id.includes("cloth")) {
          mainItems[indexItem + 1].clothPrice = rowOfChnge.innerText;
          console.log(mainItems);
        }
        
      });
      
      
      localStorage.setItem(idSaved + "user", JSON.stringify(mainItems));
    });
  });
}

console.log(childer)




var userContent = document.querySelector(".screen-editor-content-main");

//var contentSaved = localStorage.getItem(idSaved);


/*if (contentSaved) {
  userContent.innerHTML = contentSaved;
}
*/

console.log(childer)

document.querySelector(".add-more-class").addEventListener("click", () => {
  childer = childer + 1;
  var amount = document.createElement("span");
  var longDiscation = document.createElement("span");
  var dayi = document.createElement("span");
  var clothPrice = document.createElement("span");
  amount.className = "bill-opt";
    amount.id = "amount" + childer;
    longDiscation.className = "bill-opt";
    longDiscation.id = "long" + childer;
    dayi.className = "bill-opt";
    dayi.id = "dayi" + childer;
    clothPrice.className = "bill-opt";
    clothPrice.id = "cloth" + childer;
  amount.innerText = childer;
  longDiscation.innerText = childer;
  dayi.innerText = childer;
  clothPrice.innerText = childer;
  if (childer > 12) {
    alert("Page Full");
    childer = childer - 1;
  } else {
    document.getElementById("items-amount").appendChild(amount);
    document.getElementById("items-longDiscation").appendChild(longDiscation);
    document.getElementById("items-dayi").appendChild(dayi);
    document.getElementById("items-clothPrice").appendChild(clothPrice);
    
    document.querySelectorAll(".bill-opt").forEach((bill) => {
      bill.setAttribute("contenteditable", true);
      bill.addEventListener("input", () => {
        //   localStorage.setItem(idSaved, userContent.innerHTML);
        var indexItem = mainItems.findIndex(crd => bill.id.replace(/[a-z]/g, "") - 1 == crd.id);
        console.log(indexItem + 1)
        //  var idOfrow = bill.id.replace(/[0-9]/, "");
        console.log(`#${bill.id}`)
        document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
          if (rowOfChnge.id.includes("amount")) {
            mainItems[indexItem + 1].amount = rowOfChnge.innerText;
            console.log(mainItems);
          }
          
        });
        
        
        
        document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
          if (rowOfChnge.id.includes("long")) {
            mainItems[indexItem + 1].longDiscation = rowOfChnge.innerText;
            console.log(mainItems);
          }
          
        });
        
        document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
          if (rowOfChnge.id.includes("dayi")) {
            mainItems[indexItem + 1].dayi = rowOfChnge.innerText;
            console.log(mainItems);
          }
          
        });
        
        document.querySelectorAll(`#${bill.id}`).forEach((rowOfChnge) => {
          if (rowOfChnge.id.includes("cloth")) {
            mainItems[indexItem + 1].clothPrice = rowOfChnge.innerText;
            console.log(mainItems);
          }
          
        });
        
        
        localStorage.setItem(idSaved + "user", JSON.stringify(mainItems));
      });
    });
    // localStorage.setItem(idSaved, userContent.innerHTML);
    var itemChild = {
      id: childer,
      amount: amount.innerText,
      longDiscation: longDiscation.innerText,
      dayi: dayi.innerText,
      clothPrice: clothPrice.innerText
    }
    mainItems.push(itemChild);
    localStorage.setItem(idSaved + "user", JSON.stringify(mainItems));
    console.log(mainItems)
    // localStorage.setItem(idSaved + "child", childer);
    
  }
  
  
  
  
  
});


document.querySelector(".remove-more-class").addEventListener("click", () => {
  childer = childer - 1;
  var itemAmount = document.getElementById("items-amount");
  var last = itemAmount.children.length;
  itemAmount.children[last - 1].remove();
  
  var itemLong = document.getElementById("items-longDiscation");
  var last = itemLong.children.length;
  itemLong.children[last - 1].remove();
  
  var itemDayi = document.getElementById("items-dayi");
  var last = itemDayi.children.length;
  itemDayi.children[last - 1].remove();
  
  var itemCloth = document.getElementById("items-clothPrice");
  var last = itemCloth.children.length;
  itemCloth.children[last - 1].remove();
  
  
  if (mainItems.length > 0) {
    mainItems.splice(childer, 1);
  }
  localStorage.setItem(idSaved + "user", JSON.stringify(mainItems));
  //  localStorage.setItem(idSaved, userContent.innerHTML);
  //  localStorage.setItem(idSaved + "child", childer);
  
});



setInterval(() => {
  if (childer === 0) {
    document.querySelector(".remove-more-class").style.display = "none";
    document.querySelector(".add-more-class").style.display = "block"
  } else if (childer === 15) {
    // fill
  } else if (childer !== 0) {
    document.querySelector(".remove-more-class").style.display = "block";
  } else if (childer > 0 && childer !== 15) {
    document.querySelector(".add-more-class").style.display = "block";
  } else {
    document.querySelector(".add-more-class").style.display = "block";
  }
});





var AllButton = document.querySelectorAll("button");

AllButton.forEach((holdBtn) => {
  let timeout;
  
  holdBtn.addEventListener('touchstart', () => {
    timeout = setTimeout(() => {
      alert("Hold Btn")
    }, 1000); // 1 second delay
  });
  
  holdBtn.addEventListener('touchend', () => {
    clearTimeout(timeout);
  });
  
  holdBtn.addEventListener('touchcancel', () => {
    clearTimeout(timeout);
  });
});



document.getElementById("full-show").addEventListener("click", (e) => {
  var img = document.querySelector("#full-show img");
  if (img.src.includes("slide")) {
    var dayi = document.querySelector("#items-dayi");
    var valuesDayi = "";
    dayi.querySelectorAll("span").forEach((dayiRupees) => {
      valuesDayi = `${valuesDayi} + ${dayiRupees.innerText}`;
    });
    var clothRu = document.querySelector("#items-clothPrice");
    var valueCloth = "";
    clothRu.querySelectorAll("span").forEach((rupe) => {
      valueCloth = `${valueCloth} + ${rupe.innerText}`;
    });
    
    Total(true, eval(valuesDayi), eval(valueCloth), true);
    img.src = "close-line 1.svg";
    document.querySelector(".nav-top-wrapper").style.marginTop = "-12vw";
    e.target.style.opacity = "0.5";
    document.querySelector("#full-show").style.marginTop = "12vw";
    document.querySelector(".ui-btn-class").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".ui-btn-class").style.display = "none";
    }, 300);
    document.querySelectorAll(".bill-opt").forEach((bill) => {
      bill.setAttribute("contenteditable", false)
    });
  } else {
    img.src = "slideshow-view.svg";
    Total(false);
    document.querySelector(".nav-top-wrapper").style = "";
    e.target.style = "";
    document.querySelector("#full-show").style = "";
    document.querySelector(".ui-btn-class").style = "";
    e.target.style = "";
    document.querySelectorAll(".bill-opt").forEach((bill) => {
      bill.setAttribute("contenteditable", true)
    });
  }
});


var nameUser = sessionStorage.getItem("nameUser");
var date = sessionStorage.getItem("date");

if (nameUser) {
  if (date) {
    document.querySelector(".name-user-main span").innerText = nameUser;
    document.querySelector(".date-main span").innerText = date;
  }
}



document.querySelector(".nav-top-back-btn").addEventListener("click", () => {
  if (history.back()) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
});



/*var logoName = localStorage.getItem("logoName");

if (logoName) {
  document.querySelector(".logo-main span").innerText = logoName;
} else {
  document.querySelector(".logo-main span").innerText = "کاروبارکانام";
}
*/