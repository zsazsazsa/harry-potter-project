export let potteryToSell = []

export const toSellorNotToSell = (pottery) => {
    if (pottery.weight >= 6 && !pottery.cracked) {
        pottery.price = 40
        potteryToSell.push(pottery)
    } else if (pottery.weight < 6 && !pottery.cracked) {
        pottery.price = 20
        potteryToSell.push(pottery)
    }
    return pottery
}


//this is not working for some reason
export const usePottery = () => {
    const catalog =  potteryToSell.map(pottery => ({...pottery}))
    return catalog
}