import { OptionList } from '/OptionList.js';
import { RenameCard } from '/Rename Card.js';
import { DeleteCard } from '/Delete Card.js';
import { MenuBar } from '/MenuBar.js';
import { SearchUI } from '/Search Ui.js';


function RenameFun() {
  RenameCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
}


function DeleteFun() {
  DeleteCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
}



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






export const CreateProject = () => {
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
  
  
  if (mainCreateProject) {
    
    
    document.querySelector(".cancelP-btn button").addEventListener("click", () => {
      document.querySelector(".main-createP-wrapper").style.animation = "hideCreateP 0.1s";
      history.back();
      setTimeout(() => {
        document.body.removeChild(mainCreateProject);
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
          var mainS = document.createElement("filters");
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
          FilterCard();
          mainS.querySelector(".project-menu-class").addEventListener("click", () => {
            sessionStorage.setItem("menuID", mainS.id);
            var card = mainS.querySelector(".project-menu-class");
            var rect = card.getBoundingClientRect();
            var xPos = rect.left;
            var yPos = rect.top;
            setTimeout(() => {
              OptionList({
                0: ["edit-2.svg", "Rename"],
                1: ["delete-bin-line.svg", "Delete"],
                2: ["edit-box-line.svg", "Edit"],
                3: ["pushpin-line.svg", "Pin"]
              }, [RenameFun, DeleteFun], {
                Left: xPos + "px",
                Top: yPos + "px"
              }, true);
            }, 0);
          });
          document.querySelector(".cancelP-btn button").click();
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
    
    window.addEventListener("popstate", ()=>{
      document.querySelector(".cancelP-btn button").click();
    });
    
    
    
  }
  
  
  
}