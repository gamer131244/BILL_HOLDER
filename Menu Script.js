







document.querySelectorAll(".project-card .project-menu-class").forEach((card) => {
  card.addEventListener("click", () => {
    var idPr = "";
    document.querySelectorAll("filters").forEach((cd) => {
      cd.addEventListener("click", () => {
        sessionStorage.setItem("menuID", cd.id);
        idPr = cd.id;
      });
    });
    var rect = card.getBoundingClientRect();
    var checktrue = "Bill Paid";
    var checked = "";
    var iconTrue = "bookmark-3-line.svg";
    setTimeout(() => {
      checked = document.querySelector(`#${idPr} .project-full span img`);
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


document.querySelectorAll(".project-name-class").forEach((Name)=>{
  Name.addEventListener("click", ()=>{
    Name.parentNode.click();
  });
});

document.querySelectorAll(".project-time-class").forEach((Date)=>{
  Date.addEventListener("click", ()=>{
    Date.parentNode.click();
  });
});





document.querySelectorAll("filters").forEach((bill)=>{
  bill.addEventListener("click", (e)=>{
    if (e.target.className.includes("project-card")) {
      var name = bill.querySelector(".project-name span").innerText;
      var date = bill.querySelector(".project-time span").innerText;
      sessionStorage.setItem("nameUser", name);
      sessionStorage.setItem("date", date);
      sessionStorage.setItem("idSaved", bill.id);
      setTimeout(()=>{
        window.location.href = "/editor.html";
      }, 100);
    }
  });
});