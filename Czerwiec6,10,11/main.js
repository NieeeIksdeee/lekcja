
const addTabAndContent = document.querySelector('.tabs__addBtn');

getTabsBtn = () => {
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    return tabsBtn
}

getTabsContent = () => {
    const tabsContent = document.querySelectorAll('.tabs__content');
    return tabsContent
}

getDeleteBtn = () => {
    const deleteBtn = document.querySelectorAll('.tabBtn__deleteTab');
    return deleteBtn
}

getSideBar = () => {
    const SideBar = document.querySelector('.tabs__sidebar');
    return SideBar
}

getLastNrTab = () =>{
    return [...getSideBar().children].pop()
}

function updateTabsList() {
    getTabsBtn().forEach((button) => {
        button.addEventListener('click', () => {
            const tabNr = button.dataset.tabNr;
            getTabsBtn().forEach(btn => {
                btn.classList.remove("tabs__btn--active");
            })
            button.classList.add("tabs__btn--active");
            getTabsContent().forEach(content => {
                let contentNr = content.dataset.contentNr;
                content.classList.remove("tabs__content--active");
                if (contentNr === tabNr) {
                    content.classList.add("tabs__content--active");
                }
            })
        })
    })
}

function updateDeleteBtn() {
    getDeleteBtn().forEach((delButton) => {
        delButton.addEventListener('click', (e) => {
            let buttonParent = delButton.parentElement;
            let tabNr = buttonParent.dataset.tabNr
            getTabsContent().forEach(content => {
                let contentNr = content.dataset.contentNr;;
                if (contentNr === tabNr) {
                    content.parentElement.removeChild(content);
                    buttonParent.parentElement.removeChild(buttonParent);
                }
            })
            e.stopPropagation();
        })
    })
}

function addNewTab(tabSidebar){
   let last = parseInt([...getSideBar().children].pop().dataset.tabNr);   
   console.log(getSideBar().children);
	let newButton = document.createElement('div');
    tabSidebar.appendChild(newButton);
    newButton.innerText = `Tabs ${last+1}`;
    newButton.classList.add("tabs__btn");
	newButton.dataset.tabNr = last+1;
    return newButton;
};

function  addNewDeleteBtn(newButton){
    let newDeleteBtn = document.createElement('div');
    newDeleteBtn.innerText = ' ';
    newDeleteBtn.classList.add("tabBtn__deleteTab");
    newButton.appendChild(newDeleteBtn);
}

function addNewContent(tabSidebar){
    let last = parseInt([...getSideBar().children].pop().dataset.tabNr);
    let newContent = document.createElement('div');
    newContent.innerText = `asd ${last}`;
    newContent.classList.add("tabs__content");
    newContent.dataset.contentNr = last;
    tabSidebar.parentElement.appendChild(newContent);
}

addTabAndContent.addEventListener('click', (event) => {
    let tabSidebar = event.target.parentElement;
    let newButton = addNewTab(tabSidebar);  
    
    addNewDeleteBtn(newButton);
    addNewContent(tabSidebar)

    updateTabsList();
    updateDeleteBtn();
    getLastNrTab();
})

function init() {
    updateTabsList();
    updateDeleteBtn();
}
init();

