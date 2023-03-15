export let loadFooter = (() => {
    let footerContainer = document.createElement('div');
    footerContainer.classList.add('footer');
    footerContainer.textContent = "footer";

    return {footerContainer}
})();