import { navigation } from "./common/navigation"
import Handlebars from 'handlebars';
import { index as indexPageData } from "./pages/index"
import { contactus as contactUsPageData } from "./pages/contactus"
import { equipos as equiposPageData } from "./pages/equipos"
import { deportes as deportesPageData } from "./pages/deportes";
import { testimonios as testimoniosPageData } from "./pages/testimonios";


export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...navigation
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = indexPageData;
            pageVariables = testimoniosPageData;
            break;
        case '/contactus.html':
            pageVariables = contactUsPageData;
            break;
        case '/equipos.html': 
            pageVariables = equiposPageData;
            break;
        case '/deportes.html': 
            pageVariables = deportesPageData;
            break;
        default:
                console.log("Página no encontrada:", pagePath);
            }

    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }

    Handlebars.registerHelper('eq', function (a, b) {
        return a === b;
    });
    
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext;
}
