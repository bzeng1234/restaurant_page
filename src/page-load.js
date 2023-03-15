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

    //return contentDiv
    return contentDiv;
}