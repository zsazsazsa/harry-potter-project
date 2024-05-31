// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellorNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 5, 3)
let bowl = makePottery("Bowl", 10, 2)
let plate = makePottery("Plate", 9, 1)
let pitcher = makePottery("Pitcher", 25, 12)
let vase = makePottery("Vase", 50, 25)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedBowl = firePottery(bowl, 2200)
let firedPlate = firePottery(plate, 4000)
let firedPitcher = firePottery(pitcher, 1500)
let firedVase = firePottery(vase, 2000)

// Determine which ones should be sold, and their price
toSellorNotToSell(firedMug)
toSellorNotToSell(firedBowl)
toSellorNotToSell(firedPlate)
toSellorNotToSell(firedPitcher)
toSellorNotToSell(firedVase)


// Invoke the component function that renders the HTML list
const potteryList = document.querySelector(".potteryList")
potteryList.innerHTML = PotteryList()



