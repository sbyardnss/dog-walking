import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkerCities = getWalkerCities()
const cities = getCities()
const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`

    }

    walkerHTML += "</ul>"
    return walkerHTML
}

const filterWalkerCitiesByWalker = (walker) => {
    const assignment = [];
    for (const city of walkerCities) {
        if (city.walkerId === walker.id) {
            assignment.push(city);
        }
    }
    return assignment;
}

const filterByAssignment = (assignment) => {
    let assignmentString = "";
    for (const place of assignment) {
        for (const city of cities) {
            if (place.cityId === city.id){
                assignmentString = `${assignmentString}, ${city.name}`
            }
        }
    }
    return assignmentString
}



/*
BAD CODE. THIS WAS THE FIRST ATTEMPT


const matchWalker = () => {
    let walkerArray = [];
    for (const city of walkerCities) {
        for (const walker of walkers) {
            if (city.walkerId === walker.walkerId) {
                walkerArray.push(city)
            }
        }
        return walkerArray
    }   
}
const walkerLocations = matchWalker();

const cityString = () => {
    let cityString = ""
    for (const city of walkerLocations) {
        for (const city of cities) {
        cityString += city.name
        }
        return cityString;
    } 

}

*/


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker);
                    const cities = filterByAssignment(assignments);
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)











// "click",  // This is the type of event
// (clickEvent) => {
//     /*
//         The target of a click event is the most specific HTML element
//         that was clicked by the user.
//     */
//     const itemClicked = clickEvent.target
//     /*
//         Only run the rest of the logic if a walker <li> was clicked
//     */
//     if (itemClicked.id.startsWith("walker")) {
//         /*
//             Extract the primary key from the id attribute of the list
//             item that you clicked on. Refer back to the code you
//             wrote for each list item. Note the format of the id
//             attribute ("walker--2" if you clicked on the second one).
//             This code splits that string apart into an array, and
//             captures the "2" and assigns it to be the value of the
//             `walkerId` variable.
//             Splitting a string in JavaScript:
//                 https://www.youtube.com/watch?v=u2ZocmM93yU
//             Destructuring in JavaScript:
//                 https://www.youtube.com/watch?v=UgEaJBz3bjY
//         */
//         const [,walkerId] = itemClicked.id.split("--")
//         /*
//             Now that you have the primary key of a walker object,
//             find the whole object by iterating the walkers array.
//         */
//         for (const walker of walkers) {
//             /*
//                 Compare the primary key of each walker to the one
//                 you have. As soon as you find the right one, display
//                 the window alert message.
//             */
//             if (walker.id === parseInt(walkerId)) {
//                 window.alert(`${walker.name} services ${walker.city}`)
//             }
//         }
//     }
// }
