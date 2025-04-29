var projectSaved = localStorage.getItem("user-data") ? localStorage.getItem("user-data") : "[]";



var projects = JSON.parse(projectSaved);

if (projects.length) {
  projects.forEach((projected)=>{
    var htmlProject = `
    
    
                      <div class="project-card">
                        <div class="project-menu-class">
                          <div class="project-menu">
                            <span>
                              <img src="more-vertical.svg" />
                            </span>
                          </div>
                        </div>
                        <div class="project-name-class">
                          <div class="project-name">
                            <span>${projected.TitleName}</span>
                          </div>
                        </div>
                        <div class="project-time-class">
                          <div class="project-time">
                            <span>${projected.DateProject}</span>
                          </div>
                        </div>
                        <div class="project-page-class">
                          <div class="project-page">
                            <span>1 page</span>
                          </div>
                        </div>
                        <div class="project-full-class">
                          <div class="project-full">
                            <span>
                              <img src="close-line.svg" />
                            </span>
                          </div>
                        </div>
                        <div class="project-paid-class">
                          <div class="project-paid">
                            <div class="paid">
                              <span>P</span>
                            </div>
                          </div>
                        </div>
                      </div>
          
    
    
    
    
    `;
    
    var mainWrapperCard = document.createElement("filter");
    mainWrapperCard.className = "unpaid";
    mainWrapperCard.innerHTML = htmlProject;
    mainWrapperCard.id = projected.id;
    mainWrapperCard.addEventListener("click", ()=>{
      sessionStorage.setItem("menuID", mainWrapperCard.id)
    })
    document.querySelector(".project-ul").appendChild(mainWrapperCard);
    
  });
}

console.log(projects);


window.addEventListener("error", (e)=>{
  
})


/* OptionList UI Function */
const OptionList = (length, functions, style, touchPoint) => {
  if (length == undefined) {
    length = {
      1: ["", "Title 1"],
      2: ["", "Title 2"],
      3: ["", "Title 3"]
    };
  }
  
  if (style == undefined) {
    style = {
      Top: "0px",
      Left: "0px"
    }
  } else {
    
  }
  
  if (functions === undefined) {
    functions = [];
  }
  
  
  var listHtml = `
    <div class="opt-wrapper">
    <div class="opt-class">
      <div class="opt-main">
        <div class="list-wrapper">
          <div class="list-class">
            <div class="list-main">
              <div class="opt-list-class">
                <div class="opt-list-main">
                  <div class="list-opt">
                  
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
  overscroll-behavior: none;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
  }
  
  
  
  
  
  .opt-wrapper {
  position: absolute;
  top: /*Value of Touch Point Y*/ ${style.Top} ;
  left: /*Value of Touch Point X*/ ${style.Left} ;
  animation: showBar 0.2s;
  transform-origin: top;
  z-index: 99999999999999999999;
}

@keyframes showBar {
  0%{
    transform: scaleY(0);
  }
}

@keyframes hideBar {
  100%{
    opacity: 0;
  }
}

.opt-class {
  background: whitesmoke;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 30vw;
  border-radius: 1vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border: 0.2vw solid lightgray;
}


.list-opt {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
}

.list-opt span {
  width: 105%;
  height: 8vw;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0.2vw;
  font-size: 3vw;
  background: white;
  border-radius: 1vw;
  transition: all 0.3s;
  overflow: hidden;
}

.list-opt .opt:active span {
  background: lightgray;
}

.list-opt .opt:active {
  background: lightgray;
}


.list-opt span img {
  height: 4vw;
  width: 4vw;
  padding: 1.5vw;
}

.main-list {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}


.block-back {
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 0;
}



  </style>
  
    `;
  
  
  
  var mainList = document.createElement("div");
  mainList.className = "main-list";
  mainList.innerHTML = listHtml;
  document.body.appendChild(mainList);
  var blocks = document.createElement("div");
  blocks.className = "block-back";
  document.body.appendChild(blocks);
  Object.entries(length).forEach(([key, value]) => {
    var icon = value[0];
    var title = value[1];
    var Span = document.createElement("span");
    Span.className = "opt";
    var img = document.createElement("img");
    img.src = icon;
    var titleOfList = document.createElement("span");
    var txt = document.createTextNode(title);
    titleOfList.appendChild(txt);
    Span.appendChild(img);
    Span.appendChild(titleOfList);
    document.querySelector(".list-opt").appendChild(Span);
    Span.addEventListener("click", functions[key]);
    
    
  });
  
  if (touchPoint) {
    var OptW = window.getComputedStyle(document.querySelector(".opt-wrapper")).width;
    document.querySelector(".opt-wrapper").style.left = style.Left.replace("px", "") - OptW.replace("px", "") + innerWidth / 20 + "px";
  } else {
    
  }
  
  
  
  
  document.querySelector(".block-back").addEventListener("click", () => {
    var delay = "0.2"
    document.querySelector(".opt-wrapper").style.animation = `hideBar 0.3s`;
    setTimeout(() => {
      try {
        document.body.removeChild(mainList);
        document.body.removeChild(blocks);
      } catch (e) {
        e
      }
    }, 300);
  });
  
  
  
  
}
/* OptionList UI Close */

/* Rename Card UI Function */
const RenameCard = (RenameID) => {
  var renameTxt = document.querySelector(`#${RenameID} .project-name-class span`);
  var renameHtml = `
    <div class="rename-card-wrapper">
    <div class="rename-card-class">
      <div class="rename-card-main">
        <div class="rename-card-title-class">
          <div class="rename-card-title">
            <span>Rename</span>
          </div>
        </div>
        <div class="rename-card-describe-class">
          <div class="rename-card-describe">
            <span>New name</span>
          </div>
        </div>
        <div class="rename-card-input-class">
          <div class="rename-card-input">
            <input type="rename" id="rename-input"  placeholder="${renameTxt.innerText.slice(0, 100)}" value="${renameTxt.innerText.slice(0, 100)}" />
          </div>
        </div>
        <div class="rename-card-button-ui-class">
          <div class="rename-card-button-ui">
            <div class="cancel-btn-class">
              <button>Cancel</button>
            </div>
            <div class="rename-btn-class">
              <button>Rename</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  
  
  .rename-card-wrapper {
    animation: showRename 0.2s;
  }
  
  @keyframes showRename {
    0%{
      opacity: 0;
      transform: translateY(50%);
    }
  }
  
  @keyframes hideRename {
    100%{
      opacity: 0;
      transform: translateY(50%);
    }
  }
  
  
  input {
  font-family: "Poppins" !important;
}


.rename-card-class {
  min-height: 50vw;
  width: 82vw;
  background: whitesmoke;
  border: 0.4vw solid lightgray;
  border-radius: 6vw;
}


.rename-card-class .rename-card-title-class {
  font-size: 6vw;
  font-weight: bold;
  padding: 5vw;
  padding-bottom: 2vw;
}


.rename-card-class .rename-card-describe-class {
  font-size: 4vw;
  padding: 5vw;
  padding-top: 0vw;
  padding-left: 6vw;
  padding-bottom: 1.5vw;
  font-weight: 500;
}


.rename-card-class .rename-card-input-class {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rename-card-class .rename-card-input {
  padding-bottom: 3vw;
}

.rename-card-class .rename-card-input-class input[type="rename"] {
  border: 0.3vw solid lightgray;
  height: 7.5vw;
  width: 67vw;
  padding-left: 3vw;
  border-radius: 2vw;
  font-size: 3.4vw;
  font-weight: 480;
  outline: none;
  transition: all 0.2s;
}


.rename-card-class .rename-card-input-class input[type="rename"]:focus {
  border-color: royalblue;
}



.rename-card-class .rename-card-button-ui {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.3vw;
}


.rename-card-class .rename-card-button-ui button {
  border: none;
  height: 10vw;
  width: 34vw;
  background: transparent;
  border-radius: 2.5vw;
  font-size: 3.8vw;
  font-weight: bold;
  transition: all 0.3s;
}


.rename-card-class .rename-card-button-ui button:active {
  background: #e0e0e0;
}


.rename-card-class .rename-btn-class button {
  background: royalblue !important;
  color: white;
  transition: all 0.3s;
}


.rename-btn-class button:active {
  background: mediumblue !important;
}


.main-rename-card {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999999999999999999999;
  height: 100%;
  width: 100%;
  background: #0000003D;
  transition: all 0.3s;
}

body {
  overscroll-behavior: none;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
}
  
  
  
  </style>
  
  `;
  var mainRenameCard = document.createElement("div");
  mainRenameCard.className = "main-rename-card";
  mainRenameCard.innerHTML = renameHtml;
  document.body.appendChild(mainRenameCard);
  
  
  if (mainRenameCard.children.length) {
    
    try {
      
      try {
        
        document.querySelector(".rename-btn-class button").addEventListener("click", () => {
          if (document.querySelector("#rename-input").value !== "") {
            renameTxt.innerText = document.querySelector("#rename-input").value;
            document.querySelector(".cancel-btn-class button").click();
            history.back();
          } else {
            document.querySelector("#rename-input").style.borderColor = "red";
            document.querySelector("#rename-input").onfocus = function() {
              this.style = "";
            }
          }
          var index = projects.findIndex(card => card.id === RenameID);
          if (index !== -1) {
            projects[index].TitleName = renameTxt.innerText;
            localStorage.setItem("user-data", JSON.stringify(projects));
          }
          console.log(projects)
        });
      } catch (e) {
        e
      }
      
      try {
        
        document.querySelector(".cancel-btn-class button").addEventListener("click", () => {
          document.querySelector(".rename-card-wrapper").style.animation = "hideRename 0.1s";
          
          if (document.querySelector(".search-main-manager")) {
            history.forward();
          } else {
            history.back();
          }
          
          
          setTimeout(() => {
            try {
              document.body.removeChild(mainRenameCard);
            } catch (e) {
              e
            }
          }, 100);
        });
      } catch (e) {
        e
      }
      
      
      
      history.pushState(null, null, location.href);
      
      window.addEventListener("popstate", () => {
        try {
          document.querySelector(".cancel-btn-class button").click();
        } catch (e) {
          e
        }
      });
      
      history.forward();
      
    } catch (e) {
      e
    }
    
  } else {
    history.forward();
  }
  
  
}
/* Rename Card UI Close */

/* Delete Card UI Function */
const DeleteCard = (deleteID) => {
  var deleteTxt = document.querySelector(`#${deleteID} .project-name-class span`);
  var deleteHtml = `
  
    <div class="delete-card-wrapper">
    <div class="delete-card-class">
      <div class="delete-card-main">
        <div class="delete-card-title-class">
          <div class="delete-card-title">
            <span>Delete</span>
          </div>
        </div>
        <div class="delete-card-describe-class">
          <div class="delete-card-describe">
            <span>Do you want to delete <b>${deleteTxt.innerText} ?</b> </span>
          </div>
        </div>
        <div class="delete-card-button-ui-class">
          <div class="delete-card-button-ui">
            <div class="delete-cancel-btn-class">
              <button>Cancel</button>
            </div>
            <div class="delete-btn-class">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  
  
  input {
  font-family: "Poppins" !important;
}



.delete-card-wrapper {
  animation: showDeleteBar 0.2s;
}


@keyframes showDeleteBar {
  0% {
    opacity: 0;
    transform: translateY(60%);
  }
}

@keyframes hideDeleteBar {
  100% {
    opacity: 0;
    transform: translateY(60%);
  }
}


.delete-card-class {
  background: whitesmoke;
  min-height: 40vw;
  width: 82vw;
  border-radius: 6vw;
  border: 0.4vw solid lightgray;
}


.delete-card-class .delete-card-title-class {
  padding: 4vw;
  padding-bottom: 1vw;
  font-size: 5vw;
  font-weight: bold;
}


.delete-card-class .delete-card-describe-class {
  padding: 5vw;
  padding-top: 1vw;
  padding-bottom: 0vw;
  padding-left: 7vw;
  font-size: 3.6vw;
  font-weight: 450;
  max-height: 70vh;
  overflow: scroll;
}


.delete-card-class .delete-card-button-ui {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  padding: 5vw;
  margin-top: 2vw;
}


.delete-card-class .delete-card-button-ui button {
  border: none;
  height: 10vw;
  width: 35vw;
  background: transparent;
  border-radius: 3.3vw;
  font-size: 3.9vw;
  font-weight: bold;
  transition: all 0.4s !important;
}


.delete-card-button-ui button:active {
  background: #e0e0e0 !important;
}



.delete-card-class .delete-card-button-ui .delete-btn-class button {
  background: red;
  color: white;
}



.delete-btn-class button:active {
  background: darkred !important;
}


.main-delete {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #0000003D;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
}
  
  

  
  
  </style>
  
  
   `;
  var mainDelete = document.createElement("div");
  mainDelete.className = "main-delete";
  mainDelete.innerHTML = deleteHtml;
  document.body.appendChild(mainDelete);
  
  
  if (mainDelete.parentNode) {
    
    
    document.querySelector(".delete-btn-class button").addEventListener("click", () => {
      var deleteElement = document.querySelector(`#${deleteID}`);
      deleteElement.querySelector(".project-card").style.animation = "trashOut 0.5s"
      setTimeout(() => {
        deleteElement.remove();
        FilterCard();
      }, 500);
      document.querySelector(".delete-cancel-btn-class button").click();
    });
    
    
    document.querySelector(".delete-cancel-btn-class button").addEventListener("click", () => {
      document.querySelector(".delete-card-wrapper").style.animation = "hideDeleteBar 0.1s";
      var indexDelete = projects.findIndex(card => card.id === deleteID);
      if (indexDelete !== -1) {
        projects.splice(indexDelete, 1);
        localStorage.setItem("user-data", JSON.stringify(projects));
      }
      console.log(projects);
      if (document.querySelector(".search-main-manager")) {
        history.forward();
      } else {
        history.back();
      }
      
      setTimeout(() => {
        try {
          document.body.removeChild(mainDelete);
        } catch (e) {
          e
        }
      }, 100);
    });
    
    
    history.pushState(null, null, location.href);
    
    window.addEventListener("popstate", () => {
      try {
        if (document.querySelector(".search-main-manager")) {
          document.querySelector(".delete-cancel-btn-class button").click();
          history.forward();
        } else {
          document.querySelector(".delete-cancel-btn-class button").click();
        }
      } catch (e) {
        e
      }
    });
    
    
  }
  
  
  
  
}
/* Delete Card UI Close */

/* MenuBar UI Function */
const MenuBar = (visiabel, length, style, personsal) => {
  
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
    try {
      var img = document.querySelector(".menu-icon span img");
      document.querySelector(".main-menu-manager").style.animation = "hideMenu 0.3s";
      img.src = "/menu.svg";
      document.querySelector(".menu-icon").style.background = "transparent";
      document.querySelector(".menu-btn-wrapper").style.zIndex = "auto";
    } catch (e) {
      e
    }
    setTimeout(() => {
      try {
        document.querySelector(".main-menu-manager").remove();
      } catch (e) {
        e
      }
    }, 300);
  });
  
  
}
/* MenuBar UI Close */

/* Create Project UI Function */
const CreateProject = () => {
  var htmlCreateProject = ` 
  
    <div class="main-createP-wrapper">
    <div class="main-createP-class">
      <div class="main-createP-main">
        <div class="createP-title-class">
          <div class="createP-title">
            <span>Create Project</span>
          </div>
        </div>
        <div class="createP-input-wrapper">
          <div class="createP-input-class">
            <div class="lebel-name">
              <label>Name</label>
            </div>
            <div class="createP-input-main">
              <div class="input-project-name">
                <input type="name" id="project-name-input" placeholder="Project Name" />
              </div>
              <div class="date-time-input-wrapper">
                <div class="date-time-input-class">
                  <div class="date-label-class">
                    <label>Start Date</label>
                  </div>
                  <div class="date-time-input">
                    <input type="date" id="date-inputs" />
                  </div>
                </div>
              </div>
              <div class="createP-button-ui-wrapper">
                <div class="createP-button-ui-class">
                  <div class="createP-button-ui-main">
                    <div class="cancelP-btn">
                      <button>Cancel</button>
                    </div>
                    <div class="createP-btn">
                      <button>Create</button>
                    </div>
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
  
  
  input {
  font-family: "Poppins" !important;
}


.main-createP-wrapper {
  animation: showCreateP 0.2s;
}


.main-createP-class {
  min-height: 50vw;
  width: 89vw;
  background: whitesmoke;
  border: 0.4vw solid lightgray;
  border-radius: 6vw;
}


.createP-title-class {
  font-size: 6vw;
  font-weight: bold;
  padding: 4vw;
  padding-bottom: 5vw;
}


.input-project-name {
  display: flex;
  justify-content: left;
  align-items: center;
}

.input-project-name {
  padding-left: 7vw;
}


.input-project-name input[type="name"] {
  border: 0.3vw solid lightgray;
  height: 7vw;
  width: 72vw;
  padding-left: 3vw;
  border-radius: 2vw;
  font-size: 3.4vw;
  font-weight: 480;
  outline: none;
  transition: all 0.2s;
}

.input-project-name input[type="name"]:focus {
  border-color: royalblue;
}


.date-time-input {
  padding: 0vw;
  padding-left: 7vw;
}


.date-time-input input[type="date"] {
  border: 0.3vw solid lightgray;
  height: 7vw;
  width: 72vw;
  padding-left: 3vw;
  border-radius: 2vw;
  font-size: 3.4vw;
  font-weight: 480;
  outline: none;
  transition: all 0.2s;
  background: white;
  appearance: none;
}

.date-time-input input[type="date"]:focus {
  borderc-color: royalblue;
}



.date-label-class {
  font-size: 4vw;
  padding-left: 7vw;
  padding-top: 4vw;
  font-weight: 450;
  padding-bottom: 1.2vw;
}


.lebel-name {
  font-size: 4vw;
  padding-left: 7vw;
  padding-top: 0vw;
  font-weight: 450;
  padding-bottom: 1.2vw;
}



.createP-button-ui-wrapper {
  padding-top: 4vw;
  padding-bottom: 4vw;
}


.createP-button-ui-main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vw;
}


.createP-button-ui-main button {
  height: 9vw;
  width: 38vw;
  background: transparent;
  border-radius: 2.5vw;
  font-size: 3.8vw;
  font-weight: bold;
  transition: all 0.3s;
  border: none;
}

.createP-button-ui-main button:active {
  background: #e0e0e0;
}


.createP-button-ui-main .createP-btn button {
  background: royalblue;
  color: white;
  transition: all 0.3s;
}


.createP-btn button:active {
  background: darkblue;
}


@keyframes showCreateP {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
}


@keyframes hideCreateP {
  100% {
    transform: translateY(50%);
    opacity: 0;
  }
}


.main-create-project-manager {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
  top: 0;
  transition: all 0.2s !important;
  background: #0000003D;
}


  
  
  </style>
  
  
     `;
  var mainCreateProject = document.createElement("div");
  mainCreateProject.className = "main-create-project-manager";
  mainCreateProject.innerHTML = htmlCreateProject;
  document.body.appendChild(mainCreateProject);
  
  
  if (mainCreateProject.children.length) {
    
    
    document.querySelector(".cancelP-btn button").addEventListener("click", () => {
      document.querySelector(".main-createP-wrapper").style.animation = "hideCreateP 0.1s";
      history.back();
      setTimeout(() => {
        try {
          document.body.removeChild(mainCreateProject);
        } catch (e) {
          e
        }
      }, 100);
    });
    
    
    var valueOfName = document.querySelector(".input-project-name input[type='name']");
    var valueOfDate = document.querySelector(".date-time-input input[type='date']");
    
    
    
    
    document.querySelector(".createP-btn button").addEventListener("click", () => {
      if (valueOfName.value !== "") {
        if (valueOfDate.value !== "") {
          var htmlData = `  
          
                                                  
                      <div class="project-card">
                        <div class="project-menu-class">
                          <div class="project-menu">
                            <span>
                              <img src="more-vertical.svg" />
                            </span>
                          </div>
                        </div>
                        <div class="project-name-class">
                          <div class="project-name">
                            <span>${valueOfName.value}</span>
                          </div>
                        </div>
                        <div class="project-time-class">
                          <div class="project-time">
                            <span>${valueOfDate.value}</span>
                          </div>
                        </div>
                        <div class="project-page-class">
                          <div class="project-page">
                            <span>1 page</span>
                          </div>
                        </div>
                        <div class="project-full-class">
                          <div class="project-full">
                            <span>
                              <img src="close-line.svg" />
                            </span>
                          </div>
                        </div>
                        <div class="project-paid-class">
                          <div class="project-paid">
                            <div class="paid">
                              <span>P</span>
                            </div>
                          </div>
                        </div>
                      </div>
          
          
            `;
          var mainS = document.createElement("filter");
          mainS.className = "unpaid";
          mainS.innerHTML = htmlData;
          var abc = `a b c d e f g h i j k l m n o p q r s t u v w x y z`;
          var sliceAbc = abc.split(" ");
          var l1 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
          var l2 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
          var l3 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
          var l4 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
          var l5 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
          var comW = l1 + l2 + l3 + l4 + l5;
          mainS.id = comW;
          document.querySelector(".project-ul").appendChild(mainS);
          var project = {
            id: mainS.id,
            TitleName: valueOfName.value,
            DateProject: valueOfDate.value,
            Check: false
          }
          projects.push(project);
          localStorage.setItem("user-data", JSON.stringify(projects));
          console.log(projects);
          var imgChk = document.querySelector(".size-project-icon span img");
          
          if (imgChk.src.includes("align-left.svg")) {
            mainS.querySelector(".project-card").style.width = "40vw";
            mainS.querySelector(".project-name").style.fontSize = "3.5vw";
            mainS.querySelector(".project-time-class").style.fontSize = "2.4vw";
            mainS.querySelector(".project-page-class").style.fontSize = "1.5vw";
          }
          FilterCard();
          
          mainS.querySelector(".project-menu-class").addEventListener("click", () => {
            sessionStorage.setItem("menuID", mainS.id);
            var card = mainS.querySelector(".project-menu-class");
            var checked = "";
            var checktrue = "";
            var iconTrue = "";
            setTimeout(() => {
              checked = document.querySelector(`#${sessionStorage.getItem("menuID")} .project-full span img`);
              if (checked.src.includes("check.svg")) {
                checktrue = "Bill Pending";
                iconTrue = "bookmark-3-fill.svg";
              } else {
                checktrue = "Bill Clear";
                iconTrue = "bookmark-3-line.svg";
              }
            });
            var rect = card.getBoundingClientRect();
            var xPos = rect.left;
            var yPos = rect.top;
            setTimeout(() => {
              OptionList({
                0: ["edit-2.svg", "Rename"],
                1: ["delete-bin-line.svg", "Delete"],
                2: ["edit-box-line.svg", "Edit"],
                3: [iconTrue, checktrue]
              }, [RenameFun, DeleteFun, OpenEditor, MarkTrue], {
                Left: xPos + "px",
                Top: yPos + "px"
              }, true);
            }, 0);
          });
          document.querySelector(".cancelP-btn button").click();
          
          
          document.querySelectorAll(".project-card").forEach((bill) => {
            bill.addEventListener("click", (e) => {
              if (e.target.className.includes("project-card")) {
                bill.style.background = "darkblue";
                var name = bill.querySelector(".project-name span").innerText;
                var date = bill.querySelector(".project-time span").innerText;
                sessionStorage.setItem("nameUser", name);
                sessionStorage.setItem("date", date);
                setTimeout(() => {
                  window.location.href = "/editor.html";
                }, 100);
              }
            });
          });
          
          
          document.querySelectorAll(".project-name-class").forEach((Name) => {
            Name.addEventListener("click", () => {
              Name.parentNode.click();
            });
          });
          
          document.querySelectorAll(".project-time-class").forEach((Date) => {
            Date.addEventListener("click", () => {
              Date.parentNode.click();
            });
          });
          
          
        } else {
          valueOfDate.style.borderColor = "red";
        }
      } else {
        valueOfName.style.borderColor = "red";
      }
    });
    
    
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var date = new Date().getDate();
    if (month > 9) {
      month = month;
    } else {
      month = "0" + month;
    }
    
    if (date > 9) {
      date = date;
    } else {
      date = "0" + date;
    }
    
    valueOfDate.value = `${year}-${month}-${date}`;
    
    
    valueOfDate.addEventListener("input", () => {
      valueOfDate.style = "";
      if (valueOfDate.value === "") {
        valueOfDate.value = `${year}-${month}-${date}`;
      }
    });
    
    valueOfName.addEventListener("input", () => {
      valueOfName.style = "";
    });
    
    
    history.pushState(null, null, location.href);
    
    window.addEventListener("popstate", () => {
      try {
        document.querySelector(".cancelP-btn button").click();
      } catch (e) {
        e
      }
    });
    
    
    
  }
  
  
  
}
/* Create Project UI Close */

/* Search UI Function */
const SearchUI = (innerHTMLs) => {
  var htmlSearch = `
  
  <div class="search-main-wrapper">
    <div class="search-main-class">
      <div class="search-main">
        <div class="search-top-area-wrapper">
          <div class="search-top-area-class">
            <div class="search-top-area-main">
              <div class="search-top-area-cancel-ui-button-class">
                <div class="search-top-area-cancel-ui-button">
                  <button>
                    <img src="arrow-left-line.svg" />
                  </button>
                </div>
              </div>
              <div class="search-top-input-wrapper">
                <div class="search-top-input-class">
                  <div class="search-top-input">
                    <div class="search-icon-wrapper">
                      <div class="search-icon-class">
                        <div class="search-icon">
                          <img src="search.svg" />
                        </div>
                      </div>
                    </div>
                    <input type="search" id="search-input" placeholder="Search bill" autofocus />
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
  
  
  input {
  font-family: "Poppins" !important;
}

img {
  height: 5vw;
  width: 5vw;
}


.search-main-wrapper {
  transition: all 0.3s;
  animation: showSearch 0.4s;
}


@keyframes showSearch {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
}


@keyframes hideSearch {
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}


.search-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3vw;
}


.search-top-area-class {
  background: royalblue;
  color: white;
  padding: 2vw;
  border-radius: 1vw;
  width: 90vw;
  outline: 0.3vw solid lightgray;
  overflow: hidden;
  animation: showOn 0.6s;
  transform-origin: bottom;
}

@keyframes showOn {
  0% {
    transform: scaleY(0);
  }
}

.search-top-input-wrapper {
  position: relative;
}

.search-icon-wrapper {
  position: absolute;
  left: 0;
}


.search-top-area-main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  margin-left: -4vw;
}



.search-top-input {
  display: flex;
  justify-content: left;
  align-items: center;
}


.search-icon-class {
  
}


.search-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}



.search-top-area-cancel-ui-button button {
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vw;
  width: 7vw;
  padding: 1vw;
  border-radius: 50%;
  transition: all 0.3s;
  position: relative;
  z-index: 999;
}

.search-top-area-cancel-ui-button button:before {
  content: "";
  background: #00000012;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  transform: scale(0);
  transition: all 0.1s linear;
  z-index: -1;
}

.search-top-area-cancel-ui-button button:active:before {
  transform: scale(1);
}


.search-top-area-cancel-ui-button button img {
  height: 6vw;
  width: 6vw;
}



.search-top-input input {
  width: 75vw;
  height: 7vw;
  padding-left: 8vw;
  outline: none;
  border-radius: 2vw;
  border: none;
  margin-left: -2vw;
  font-size: 3.2vw;
  font-weight: 450;
  background: whitesmoke;
}


.search-bottom-area-wrapper {
  padding: 2vw;
}



.search-bottom-area-class div {
  transform: scale(0.99);
}

.search-output-area-wrapper {
  position: relative;
}


.search-output-title-class {
  position: absolute;
  top: -7vw;
  left: 1vw;
  display: none;
}

.search-output-title {
  font-size: 3vw;
  width: 50vw;
  height: 4vw;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
  
 /* body {
    display: flex;
    justify-content: center;
    align-items: center;
  }*/
  
  
  
  .search-main-manager {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0vw;
    z-index: 99999;
    background: #00000069;
    padding-top: 1vw;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.4s;
  }
  
  
  .search-output-area-class {
    padding: 3vw;
  }
  
  
  .project-ul filter {
    z-index: 999999 !important;
  }
  
  .block-back {
    z-index: 999999 !important;
  }
  
  
  </style>
  
  
  
  `;
  
  var searchMain = document.createElement("div");
  searchMain.className = "search-main-manager";
  searchMain.innerHTML = htmlSearch;
  document.body.appendChild(searchMain);
  
  
  if (searchMain.parentNode) {
    
    document.querySelector("#search-input").focus();
    
    document.querySelector(".search-top-area-cancel-ui-button button").addEventListener("click", () => {
      document.querySelector(".search-main-wrapper").style.animation = "hideSearch 0.3s";
      history.back();
      setTimeout(() => {
        document.body.removeChild(searchMain);
        document.querySelectorAll("filter").forEach((CD) => {
          CD.style.display = "block";
        });
      }, 300);
    });
    
    
    document.querySelector("#search-input").addEventListener("input", (e) => {
      document.querySelectorAll("filter").forEach((bill) => {
        var filterText = bill.querySelector(".project-name span").textContent.toUpperCase();
        var userTxt = e.target.value.toUpperCase();
        bill.style.display = filterText.includes(userTxt) ? "" : "none";
      });
    });
    
    history.pushState(null, null, location.href);
    
    window.addEventListener("popstate", () => {
      if (document.querySelector(".main-rename-card")) {
        document.querySelector(".cancel-btn-class button").click();
      } else if (document.querySelector(".main-delete")) {
        document.querySelector(".delete-cancel-btn-class button").click();
      } else {
        document.querySelector(".search-top-area-cancel-ui-button button").click();
      }
    });
    
    
  }
  
  
  
  
  
  
}
/* Search UI Close */


// Example Sheet For Genrate Random ID

window.addEventListener("error", (e) => {
  
});


/*document.querySelectorAll("filter").forEach((card) => {
  var abc = `a b c d e f g h i j k l m n o p q r s t u v w x y z`;
  var sliceAbc = abc.split(" ");
  var l1 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l2 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l3 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l4 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l5 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var comW = l1 + l2 + l3 + l4 + l5;
  card.id = comW;
});*/




FilterCard();





document.querySelector(".menu-icon span").addEventListener("click", () => {
  var img = document.querySelector(".menu-icon span img");
  
  img.style.transform = "scale(0)";
  
  setTimeout(() => {
    img.style.transform = "scale(1)";
    if (img.src.includes("menu.svg")) {
      img.src = `/x.svg`;
      document.querySelector(".menu-icon").style.background = "black";
      document.querySelector(".menu-btn-wrapper").style.zIndex = "999999999";
      MenuBar(true, {
        0: ["/dashboard-horizontal-line.svg", "Dashboard"],
        1: ["/file-damage-line.svg", "Tempelete"],
        2: ["", ""]
      }, {}, {
        compony: "Bill Manager"
      });
    } else {
      img.src = "/menu.svg";
      document.querySelector(".menu-icon").style.background = "transparent";
      document.querySelector(".menu-btn-wrapper").style.zIndex = "auto";
      history.back();
      MenuBar(false);
    }
  }, 100);
  
  
  
});


document.querySelector(".size-project-icon span").addEventListener("click", () => {
  var img = document.querySelector(".size-project-icon span img");
  
  img.style.transform = "scale(0)";
  
  setTimeout(() => {
    img.style.transform = "scale(1)";
    if (img.src.includes("grid.svg")) {
      img.src = `align-left.svg`;
      var parent = document.querySelector(".project-ul");
      if (parent.children.length > 1) {
        document.querySelectorAll(".project-card").forEach((card) => {
          card.style.width = "40vw";
          
          document.querySelectorAll(`.${card.className} .project-name`).forEach((title) => {
            title.style.fontSize = "3.5vw";
          });
          
          document.querySelectorAll(`.${card.className} .project-time-class`).forEach((title) => {
            title.style.fontSize = "2.3vw";
          });
          
          document.querySelectorAll(`.${card.className} .project-page-class`).forEach((title) => {
            title.style.fontSize = "1.5vw";
          });
          
          
        });
      } else {
        img.src = `grid.svg`;
      }
    } else {
      img.src = "/grid.svg";
      document.querySelectorAll(".project-card").forEach((card) => {
        card.style.width = "90vw";
        
        document.querySelectorAll(`.${card.className} .project-name`).forEach((title) => {
          title.style = "";
        });
        
        document.querySelectorAll(`.${card.className} .project-time-class`).forEach((title) => {
          title.style = "";
        });
        
        document.querySelectorAll(`.${card.className} .project-page-class`).forEach((title) => {
          title.style = "";
        });
        
      });
    }
  }, 100);
});


function RenameFun() {
  RenameCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
}


function DeleteFun() {
  DeleteCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
  FilterCard();
}



document.querySelectorAll(".project-card .project-menu-class").forEach((card) => {
  card.addEventListener("click", () => {
    var idPr = "";
    document.querySelectorAll("filter").forEach((cd) => {
      cd.addEventListener("click", () => {
       // sessionStorage.setItem("menuID", cd.id);
        idPr = cd.id;
      });
    });
    var rect = card.getBoundingClientRect();
    var checktrue = "Bill Paid";
    var checked = "";
    var iconTrue = "bookmark-3-line.svg";
    setTimeout(() => {
      checked = document.querySelector(`#${sessionStorage.getItem("menuID")} .project-full span img`);
      if (checked.src.includes("check.svg")) {
        checktrue = "Bill Pending";
        iconTrue = "bookmark-3-fill.svg";
      } else {
        checktrue = "Bill Clear";
        iconTrue = "bookmark-3-line.svg";
      }
    });
    
    var xPos = rect.left;
    var yPos = rect.top;
    setTimeout(() => {
      OptionList({
        0: ["edit-2.svg", "Rename"],
        1: ["delete-bin-line.svg", "Delete"],
        2: ["edit-box-line.svg", "Edit"],
        3: [iconTrue, checktrue]
      }, [RenameFun, DeleteFun, OpenEditor, MarkTrue], {
        Left: xPos + "px",
        Top: yPos + "px"
      }, true);
    }, 20);
  });
});


function OpenEditor() {
  var id = sessionStorage.getItem("menuID");
  document.querySelector(`#${id} .project-card`).click();
}


function MarkTrue() {
  var imgId = sessionStorage.getItem("menuID");
  var checkIcon = document.querySelector(`#${imgId} .project-full span img`);
  var parentNodes = document.querySelector(`#${imgId}`);
  if (checkIcon.src.includes("check.svg")) {
    checkIcon.src = "close-line.svg";
    parentNodes.className = "unpaid";
  } else {
    checkIcon.src = "check.svg";
    parentNodes.className = "paid";
  }
  document.querySelector(".block-back").click();
  var props = confirm("You Went To Refresh");
  if (props) {
    NormalFilter();
  }
  
}



function ShowClear() {
  if (document.querySelector(".project-ul").children.length > 0) {
    document.querySelectorAll("filter").forEach((filterData) => {
      filterData.style.display = filterData.className === "paid" ? "block" : "none";
    });
    document.querySelector(".block-back").click();
  } else {
    
  }
}

function Unclear() {
  if (document.querySelector(".project-ul").children.length > 0) {
    document.querySelectorAll("filter").forEach((filterData) => {
      filterData.style.display = filterData.className === "paid" ? "none" : "block";
    });
    document.querySelector(".block-back").click();
  }
}

function NormalFilter() {
  if (document.querySelector(".project-ul").children.length > 0) {
    document.querySelectorAll("filter").forEach((filterData) => {
      filterData.style.display = "block";
    });
    document.querySelector(".block-back").click();
  }
}


document.querySelector(".more-nav-icon span").addEventListener("click", (e) => {
  
  var BtnP = e.target.getBoundingClientRect();
  var xP = BtnP.left;
  var yP = BtnP.top;
  OptionList({
    0: ["/checkbox-circle-line.svg", "Show Cleared"],
    1: ["/close-circle-line.svg", "Show Panding"],
    2: ["/emotion-normal-line.svg", "Normal"]
  }, [ShowClear, Unclear, NormalFilter], {
    Top: yP + "px",
    Left: xP + "px"
  }, true);
});



function FilterCard() {
  var cardWrapper = document.querySelector(".project-ul");
  if (cardWrapper.children.length > 0) {
    document.querySelector(".empty-wrapper").style.display = "none";
    document.querySelector(".project-ul-class").style.height = "auto";
  } else {
    document.querySelector(".empty-wrapper").style.display = "block";
    document.querySelector(".project-ul-class").style.height = "80vh";
  }
}



document.querySelector(".plus-nav-icon").addEventListener("click", () => {
  CreateProject();
  FilterCard();
});



document.querySelector(".search-nav-icon").addEventListener("click", () => {
  SearchUI();
});



document.querySelectorAll(".project-card").forEach((bill) => {
  bill.addEventListener("click", (e) => {
    if (e.target.className.includes("project-card")) {
      bill.style.background = "darkblue";
      var name = bill.querySelector(".project-name span").innerText;
      var date = bill.querySelector(".project-time span").innerText;
      sessionStorage.setItem("nameUser", name);
      sessionStorage.setItem("date", date);
      setTimeout(() => {
        window.location.href = "/editor.html";
      }, 100);
    }
  });
});




document.querySelectorAll(".project-name-class").forEach((Name) => {
  Name.addEventListener("click", () => {
    Name.parentNode.click();
  });
});

document.querySelectorAll(".project-time-class").forEach((Date) => {
  Date.addEventListener("click", () => {
    Date.parentNode.click();
  });
});




var dataUser = localStorage.getItem("user-data");

/*if (dataUser) {
  
  var loadScript = document.createElement("script");
  loadScript.src = "Menu Script.js"
  document.body.appendChild(loadScript);
} else {
  
}
*/



