export const RenameCard = (RenameID) => {
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
  
  
  if (mainRenameCard) {
    
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
    });
    
    
    document.querySelector(".cancel-btn-class button").addEventListener("click", () => {
      document.querySelector(".rename-card-wrapper").style.animation = "hideRename 0.1s";
      
      if (document.querySelector(".search-main-manager")) {
        history.forward();
      } else {
        history.back();
      }
      
      
      setTimeout(() => {
        document.body.removeChild(mainRenameCard);
      }, 100);
    });
    
    
    
    history.pushState(null, null, location.href);
    
    window.addEventListener("popstate", () => {
      document.querySelector(".cancel-btn-class button").click();
    });
    
    history.forward();
    
  } else {
    history.forward();
  }
  
}