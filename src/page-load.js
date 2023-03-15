import { loadHeader } from "./header";
import { loadContent } from "./content";
import { loadFooter } from "./footer";

export default function pageLoad() {

    let contentDiv = document.querySelector('#content');
    // import header element
    contentDiv.appendChild(loadHeader.headerContainer);
    // import content element
    contentDiv.appendChild(loadContent.contentContainer);
    // import footer element
    contentDiv.appendChild(loadFooter.footerContainer);

    loadHeader.homeBtn.addEventListener('click', (e) => {
        loadContent.menuContent.classList.remove('visible');
        loadContent.menuContent.classList.add('hidden');

        loadContent.contactContent.classList.remove('visible');
        loadContent.contactContent.classList.add('hidden');

        loadContent.homeContent.classList.remove('hidden');
        loadContent.homeContent.classList.add('visible');
    });

    loadHeader.menuBtn.addEventListener('click', (e) => {
        loadContent.contactContent.classList.remove('visible');
        loadContent.contactContent.classList.add('hidden');

        loadContent.homeContent.classList.remove('visible');
        loadContent.homeContent.classList.add('hidden');

        loadContent.menuContent.classList.remove('hidden');
        loadContent.menuContent.classList.add('visible');
    });
    loadHeader.contactBtn.addEventListener('click', (e) => {
        loadContent.menuContent.classList.remove('visible');
        loadContent.menuContent.classList.add('hidden');

        loadContent.homeContent.classList.remove('visible');
        loadContent.homeContent.classList.add('hidden');

        loadContent.contactContent.classList.remove('hidden');
        loadContent.contactContent.classList.add('visible');
    });

    //return contentDiv
    return contentDiv;
}