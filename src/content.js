export let loadContent = (() => {
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content');
    
    let homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.classList.add('visible');
    contentContainer.appendChild(homeContent);

    let homeText = document.createElement('p');
    homeText.classList.add('home-text');
    homeText.textContent = "Royal delivers quality food with superior service in a beautiful atmosphere. Indulge in our rich hotpot soup broths accompanied by fresh selections of meat, seafood, and vegetables. We also offer a wide selection of premium Korean marinated meats for barbecue along with many popular Korean dishes."
    homeContent.appendChild(homeText);

    let homePicture = document.createElement('div');
    homePicture.classList.add('home-picture');
    homeContent.appendChild(homePicture);

    // MENU ELEMENT

    let menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.classList.add('hidden');
    contentContainer.appendChild(menuContent);

    let menuText = document.createElement('p');
    menuText.classList.add('menu-text');
    menuText.textContent = "MENU"
    menuContent.appendChild(menuText);

    let menuPicture = document.createElement('div');
    menuPicture.classList.add('menu-picture');
    menuContent.appendChild(menuPicture);

    // CONTACT ELEMENT

    let contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contactContent.classList.add('hidden');
    contentContainer.appendChild(contactContent);

    let contactText = document.createElement('p');
    contactText.classList.add('contact-text');
    contactText.innerHTML = "Zeng's AYCE Hotpot </br>";
    contactText.innerHTML += "277 Parkingway </br>";
    contactText.innerHTML += "Quincy, MA 02169 </br>";
    contactText.innerHTML += "123-456-7890 | zenghotpot@gmail.com</br>";
    contactContent.appendChild(contactText);

    return {contentContainer, homeContent, menuContent, contactContent}
})();