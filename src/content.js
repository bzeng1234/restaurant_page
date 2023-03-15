export let loadContent = (() => {
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content');
    contentContainer.textContent = "content";

    return {contentContainer}
})();