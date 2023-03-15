export let loadFooter = (() => {
    let footerContainer = document.createElement('div');
    footerContainer.classList.add('footer');
    
    let footerElem = document.createElement('p');
    footerElem.textContent = `\u00A9 ` + "Brandon Zeng 2021"

    footerContainer.appendChild(footerElem);

    return {footerContainer}
})();