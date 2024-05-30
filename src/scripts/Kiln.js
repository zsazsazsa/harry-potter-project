export const firePottery = (pottery, temp) => {
    Object.defineProperty(pottery, "fired", {value: true})
    if (temp > 2200) {
        Object.defineProperty(pottery, "cracked", {value: true})
    } else if (temp <= 2200) {
        Object.defineProperty(pottery, "cracked", {value: false})
    }
    return pottery
}   