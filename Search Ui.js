export const SearchUI = (innerHTMLs) => {
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
  
  
  .project-ul filters {
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
        document.querySelectorAll("filters").forEach((CD) => {
          CD.style.display = "block";
        });
      }, 300);
    });
    
    
    document.querySelector("#search-input").addEventListener("input", (e) => {
      document.querySelectorAll("filters").forEach((bill) => {
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