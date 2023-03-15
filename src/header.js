export let loadHeader = (() => {

    let headerContainer = document.createElement('div');
    headerContainer.classList.add('header');
    
    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Zeng's AYCE Hotpot"
    headerContainer.appendChild(title);

    let tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    headerContainer.appendChild(tabContainer);

    let homeBtn = document.createElement('button');
    homeBtn.classList.add('home');
    homeBtn.textContent = "Home";
    tabContainer.appendChild(homeBtn);

    let menuBtn = document.createElement('button');
    menuBtn.classList.add('menu'); 
    menuBtn.textContent = "Menu";
    tabContainer.appendChild(menuBtn);

    let contactBtn = document.createElement('button');
    contactBtn.classList.add('contact');
    contactBtn.textContent = "Contact";
    tabContainer.appendChild(contactBtn);

    return {headerContainer, homeBtn, menuBtn, contactBtn}
})();