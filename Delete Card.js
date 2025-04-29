export const DeleteCard = (deleteID) => {
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
  padding-top: 0vw;
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
  
  
  if (mainDelete) {
    
    
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
      if (document.querySelector(".search-main-manager")) {
        history.forward();
      } else {
        history.back();
      }
      
      setTimeout(() => {
        document.body.removeChild(mainDelete);
      }, 100);
    });
    
    
    history.pushState(null, null, location.href);
    
    window.addEventListener("popstate", () => {
      if (document.querySelector(".search-main-manager")) {
        document.querySelector(".delete-cancel-btn-class button").click();
        history.forward();
      } else {
        document.querySelector(".delete-cancel-btn-class button").click();
      }
    });
    
    
  }
  
  
  
  
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