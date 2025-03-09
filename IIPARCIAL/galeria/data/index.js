import Handlebars from 'handlebars';
import { imagenes as indexPageData } from "./pages/index"


export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = indexPageData;
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
