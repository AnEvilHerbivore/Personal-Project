// const cityDatabase = {};



  



// function addCity (city, visited, url, top5, continent) {
//     cityDatabase[city] = Object.create({}, {
//         name: {
//         value:  city,
//         writable: true,
//         enumerable: true
//         },
        
//         image: {
//             value:  url,
//             writable: true,
//             enumerable: true
//         },
//         yearVisited: {
//             value:  visited,
//             writable: true,
//             enumerable: true
//         },
//         atrractions: {
//             value:  top5,
//             writable: true,
//             enumerable: true
//         },
//         continent: {
//             value: continent,
//             writable: true,
//             enumerable: true
//         }
//     })
// }

// addCity("Los Angeles", "2017", "https://www.lacity.org/sites/g/files/wph781/f/styles/tiled_homepage_blog/public/bigstock-griffith-164078174.jpg", ["Hollywood", "Walk of Fame", "That one chines theater place", "Other place", "A fifth Location"], "NorthAmerica");
// addCity("Paris", "1990", "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/visuel-carrousel-dossier-ou-sortir-le-soir-a-paris-740x380-c-dr/16967596-1-fre-FR/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-740x380-C-DR.jpg", ["Eifel Tower", "Cafes?", "a third place", "a 4th place", "a 5th place"], "Europe");
// addCity("Perth", "2017", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqqhGjZZYgZqqtkp15B3kUWpUjcXlrMATrF12cw0hAIQL5Bjt", ["1st place", "2nd place", "3rd place", "4th place", "5th place"], "Australia")


// localStorage.setItem("cityDatabase", JSON.stringify(cityDatabase))


const cityDatabase = JSON.parse(localStorage.getItem("cityDatabase"));

let topArticle = document.querySelector("#cityList");


function addDom (tag, className, newInfo, parentEl) {
    let newElement = document.createElement(tag);
    newElement.classList += `${className}`;
    newElement.textContent = newInfo;
    parentEl.appendChild(newElement);
    return newElement;
}

function addImg (tag, className, imgURL, parentEl) {
    let newElement = document.createElement(tag);
    newElement.classList += ` ${className}`;
    newElement.setAttribute("src", imgURL)
    parentEl.appendChild(newElement);
}




function populateDOM (displayYear) {
    for (key in cityDatabase) {
        if (displayYear === cityDatabase[key].yearVisited || !displayYear) {
            let citySection = addDom("section", cityDatabase[key].continent, "", topArticle)
            for (k in cityDatabase[key]) {

                if (k.toLowerCase() === "name") {
                    addDom("h1", k, cityDatabase[key][k], citySection);
                    console.log(citySection)
                }
                if (k.toLowerCase() === "image") {
                    addImg("img", k, cityDatabase[key][k], citySection);
                }
                if (k.toLowerCase() === "yearvisited") {
                    addDom("p", k, cityDatabase[key][k], citySection);
                }
                if (k.toLowerCase() === "atrractions") {
                    let attracionList = addDom("ol", k, "", citySection)
                    addDom("h3", "", "Top 5 Attractions", attracionList)
                    cityDatabase[key][k].forEach(element => {
                        addDom("li", "", element, attracionList)    
                    });
                }

            }
        }
    }
}



populateDOM();