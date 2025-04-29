export const MenuBar = (visiabel, length, style, personsal) => {
  
  if (length === undefined) {
    length = {
      0: ["", "Option 1"],
      1: ["", "Option 2"]
    }
  }
  
  if (personsal === undefined) {
    personsal = {};
  }
  
  if (style === undefined) {
    style = {};
  }
  
  var htmlMenu = ` 
  
  <div class="menu-content-wrapper">
  <div class="menu-content-class">
    <div class="menu-content-main">
      <div class="menu-options-wrapper">
        <div class="menu-arrow-wrapper">
          <div class="menu-arrow-class">
            <div class="menu-arrow">
              <span>
                <img src="arrow-right-wide-line.svg" />
              </span>
            </div>
          </div>
        </div>
        <div class="menu-options-class">
          <div class="menu-options-main">
            <div class="menu-options-ul">
              <div class="menu-title">
                <div class="menu-title-01">
                  <span>${personsal.compony === undefined ? "compony" : personsal.compony }</span>
                </div>
                <div class="menu-title-02">
                  <span>Menu</span>
                </div>
              </div>
              <div class="options-menu">
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="menu-area-wrapper">
        <div class="menu-area-class">
          <div class="menu-area-main">
            <div class="menu-area">
              <div class="menu-area-title-class">
                <div class="menu-area-title">
                  <span>Title</span>
                </div>
              </div>
              <div class="menu-area-innerHtml-wrapper">
                <div class="menu-area-innerHtml-class">
                  <div class="menu-area-innerHtml">
                    <!-- User HTML Code -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  
  body {
  backdrop-filter: blur(20px);
  overscroll-behavior: none;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
}


.menu-content-wrapper {
  backdrop-filter: blur(100px);
  height: 100%;
  z-index: 999999;
  background: ${style.bgWrapper !== undefined ? style.bgWrapper : "#DBDBDBC4"};
  animation: GoMenu 0.2s linear;
}

@keyframes GoMenu {
  0% {
    transform: translateX(-20%);
    opacity: 0;
    filter: blur(20px);
  }
}

@keyframes hideMenu {
  100% {
    transform: translateX(-20%);
    opacity: 0;
    filter: blur(20px);
  }
}


input {
  font-family: "${style.fontFamily !== undefined ? style.fontFamily : "Poppins"}" !important;
}

img {
  height: 7vw;
  width: 7vw;
}


.menu-content-main {
  display: flex;
  justify-content: left;
  align-items: center;
}

.menu-options-main {
  padding: 6vw;
  padding-left: 1.3vw;
  transition: all 0.5s;
}

.menu-options-ul {
  background: linear-gradient(${style.bgRotate !== undefined ? style.bgRotate : "180deg"}, ${style.bgColor01 !== undefined ? style.bgColor01 : "#1c1f3b"},${style.bgColor02 !== undefined ? style.bgColor02 : "#3c0d32"} );
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  height: 85vh;
  width: 30vw;
  border-radius: 6vw;
  color: ${style.color !== undefined ? style.color : "white"};
  padding: 5vw;
}




.options-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.menu-title .menu-title-01 {
  font-size: 2.5vw;
  color: ${style.titleColor !== undefined ? style.titleColor : "lightgray"};
}

.menu-title .menu-title-02 {
  font-size: 6vw;
  padding-top: 2vw;
  font-weight: 480;
  padding-bottom: 3vw;
}

.options-menu .main-span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
  backdrop-filter: blur(20px);
  border-radius: 2vw;
  margin-top: 1vw;
  transition: all 0.3s;
  background-color: transparent;
}



.active-span {
  background: linear-gradient(${style.spanRotate !== undefined ? style.spanRotate : "80deg"}, ${style.bgColor01 !== undefined ? style.bgColor01 : "#1c1f3b"},${style.bgColor02 !== undefined ? style.bgColor02 : "#3c0d32"} );
  backdrop-filter: blur(20px);
  outline: 0.3vw solid ${style.bgColor02 !== undefined ? style.bgColor02 : "#3c0d45"};
}

.main-span {
  width: 34vw;
  height: 10vw;
  margin-left: -3vw;
  padding-left: 1vw;
  transition: all 0.3s;
}

.options-menu span img {
  height: 2.5vw;
  width: 2.5vw;
}

.options-menu .main-span titles {
  font-size: 3.6vw;
  width: 100%;
  transition: all 0.3s;
}


.main-span {
  backdrop-filter: blur(20px);
}

.options-menu .icon-class {
  background: #FFFFFF14;
  height: 2vw;
  width: 2vw;
  padding: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vw;
}

.menu-area-class {
  background: transparent;
  height: 90vh;
  width: 50vw;
  margin-left: -3vw;
  padding: 2vw;
  transition: all 0.3s;
}


.menu-area-title-class {
  font-size: 6vw;
  padding-top: 15%;
  padding-left: 5%;
  transition: all 0.3s linear;
}




.menu-arrow-wrapper {
  position: absolute;
  top: 80vw;
  z-index: 999;
  right: 3vw;
}


.menu-options-wrapper {
  position: relative;
}


.menu-arrow-class {
  background: #222435;
  padding-top: 1vw;
  padding-bottom: 1vw;
  border-radius: 1vw;
  border: 0.3vw solid #3D3F54;
  transform: scaleX(0.8);
}

.menu-arrow span {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: rotateY(-160deg);
  transition: all 0.3s;
}

.active-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: rotateY(0deg);
  transition: all 0.3s;
}


.menu-arrow span img {
  animation: goAn 2s infinite;
  transform: translateX(-10%);
}


@keyframes goAn {
  0% {
    transform: translateX(-10%);
  }
  
  50% {
    transform: translateX(10%);
  }
  
  100% {
    transform: translateX(-10%);
  }
}


.menu-area {
  transition: all 0.3s;
}




.menu-area-title {
  font-weight: bold;
}


.main-menu-manager {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
}

  
  </style>
  

  
  
    
    `;
  var mainMenu = document.createElement("div");
  mainMenu.innerHTML = htmlMenu;
  mainMenu.className = "main-menu-manager";
  if (visiabel) {
    document.body.appendChild(mainMenu);
    Object.entries(length).forEach(([key, value]) => {
      var spanMain = document.createElement("span");
      spanMain.className = "main-span";
      var iconClass = document.createElement("div");
      iconClass.className = "icon-class";
      var icon = document.createElement("img");
      icon.src = value[0];
      iconClass.appendChild(icon);
      var title = document.createElement("titles");
      title.innerText = value[1];
      spanMain.appendChild(iconClass);
      spanMain.appendChild(title);
      mainMenu.querySelector(".options-menu").appendChild(spanMain);
    });
    setTimeout(() => {
      mainMenu.querySelector(".options-menu").children[0].click();
    }, 50);
    setTimeout(() => {
      mainMenu.querySelector(".menu-area-class").click();
    }, 800);
    
  } else {
    document.querySelector(".main-menu-manager").style.animation = "hideMenu 0.3s";
    setTimeout(() => {
      try {
        document.querySelector(".main-menu-manager").remove();
      } catch (e) {
        e
      }
    }, 300);
  }
  
  
  if (mainMenu.parentNode) {
    
    
    var menuOptions = document.querySelector(".menu-options-main");
    var menuArea = document.querySelector(".menu-area-class");
    var checkMenu = false;
    
    
    
    
    
    document.querySelector(".menu-arrow").addEventListener("click", () => {
      if (!checkMenu) {
        ShowMenu();
      } else {
        BlurMenu();
      }
    });
    
    document.querySelector(".menu-area-class").addEventListener("click", () => {
      ShowMenu();
    });
    
    
    function ShowMenu() {
      document.querySelector(".menu-arrow span").style.transform = "rotateY(0)";
      menuOptions.style.marginLeft = "-34vw";
      menuArea.style.width = "84vw";
      checkMenu = true;
      document.querySelectorAll(".main-span").forEach((sn) => {
        sn.style.pointerEvents = "none";
      });
    }
    
    
    function BlurMenu() {
      document.querySelector(".menu-arrow span").style.transform = "rotateY(-160deg)";
      menuOptions.style.marginLeft = "0vw";
      menuArea.style.width = "50vw";
      checkMenu = false;
      document.querySelectorAll(".main-span").forEach((sn) => {
        sn.style.pointerEvents = "auto";
      });
    }
    
    
    
    document.querySelectorAll(".options-menu .main-span").forEach((span) => {
      span.addEventListener("click", () => {
        document.querySelectorAll(".main-span").forEach((removes) => {
          removes.classList.remove("active-span");
        });
        span.classList.add("active-span");
        document.querySelector(".menu-area").style.transform = "translateY(20vh)";
        document.querySelector(".menu-area").style.opacity = "0";
        document.querySelector(".menu-area").style.filter = "blur(20px)";
        setTimeout(() => {
          document.querySelector(".menu-area").style.transform = "translateY(0)";
          document.querySelector(".menu-area").style.opacity = "1";
          document.querySelector(".menu-area").style.filter = "blur(0px)";
          document.querySelector(".menu-area-title").innerText = span.innerText;
        }, 300);
      });
    });
    
    
    
  }
  
  
  history.pushState(null, null, location.href);
  
  window.addEventListener("popstate", () => {
    var img = document.querySelector(".menu-icon span img");
    document.querySelector(".main-menu-manager").style.animation = "hideMenu 0.3s";
    img.src = "/menu.svg";
    document.querySelector(".menu-icon").style.background = "transparent";
    document.querySelector(".menu-btn-wrapper").style.zIndex = "auto";
    setTimeout(() => {
      try {
        document.querySelector(".main-menu-manager").remove();
      } catch (e) {
        e
      }
    }, 300);
  });
  
  
}