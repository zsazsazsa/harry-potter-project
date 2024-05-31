import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const potteryToSell = usePottery()
    let potteryDetails = ""
    for (const pottery of potteryToSell) {
        potteryDetails += `
        <section class="pottery" id="${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>
         `
    }
    return potteryDetails
}