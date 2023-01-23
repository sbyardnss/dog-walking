import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()
export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="petKeeper--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}



document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target
    let matchingPet = null;
    let matchingWalker = null;
        if (itemClicked.id.startsWith("petKeeper")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    matchingPet = pet
                }
            }
            for (const walker of walkers) {
                if (walker.id === matchingPet.walkerId) {
                    matchingWalker = walker;
                }
            }
            window.alert(`${matchingPet.name} is currently being walked by ${matchingWalker.name}`)
        }
    }
)