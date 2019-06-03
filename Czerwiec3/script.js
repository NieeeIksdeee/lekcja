const tabsBtn = document.querySelectorAll(".tabs_btn");
const tabsContent = document.querySelectorAll(".tabs_content");
const deleteBtn = document.querySelectorAll(".deleteTab");

console.dir(deleteBtn);
tabsBtn.forEach((button)=>{
    button.addEventListener("click",()=>{
        const tabNr = button.dataset.tabNr;
        tabsBtn.forEach(btn=>{
            btn.classList.remove("isActive");
        })
        button.classList.add("isActive");
    })
})
deleteBtn.forEach((delButton)=>{
    delButton.addEventListener("click",(e)=>{
        let buttonParent = delButton.parentElement;
        let contentNr = buttonParent.dataset.tabNr;
        e.stopPropagation();
    })
})