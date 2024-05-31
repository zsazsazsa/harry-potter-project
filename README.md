# harry-potter-project

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Explain how you got the HTML, with the correct data, displayed in the browser?
   > By targeting the arictle element with the class ".potteryList" in the DOM and updating it using innerHTML with a string of the pottery details.
2. In the **PotteryList** module, when you iterate your pottery, you need to show the evidence of what the **weight** property's value is for the 2nd piece of pottery. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   > https://www.loom.com/share/3c58c39afb184ac5985c50f6f85b61d4
3. The **PotteryWheel** module has a single function named `makePottery`. Why doesn't that module have all of the other code in it?
   > It is more managable to have the code is separate modules. Each module has a singular function, making it easier to read and find bugs.
4. The pottery shop has learned that there is a set of customers that are willing to buy cracked pottery at a discounted price of $2.50. That means that the cracked pottery should now be displayed in the catalog. Explain the changes that this new business strategy would cause to your algorithm.
   > I would add another else/if statement in the toSellOrNotToSell() function to update the price of the pottry to 2.50 if the objects cracked key returns true. Then the cracked pieces would be pushed to the potteryToSell array
5. In the **Kiln** module, you have a `firePottery()` function. You need to demonstrate how to use the debugger to verify the values of the parameters for that function when your code runs. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   > https://www.loom.com/share/08c83c67309b49dd95b4ce7f5d782e5e
