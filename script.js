const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberofPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

// Get number of people from number of people div
let numberOfPeople = Number(numberofPeopleDiv.innerText)

//** Calculate the total bill per person */
const calculateBill = () => {
      // get bill from user input & convert it into a number
      const bill = Number(billInput.value)

      // get the tip from user & convert it into a percentage
      const tipPercentage = Number(tipInput.value)/100

      // get the total tip amount
      const tipAmount = bill * tipPercentage

      // calculate the total (tip amount + bill)
      const total = tipAmount + bill

      // calculate the per person total 
      const perPersonTotal = total / numberOfPeople

      // update the perPersonTotal on DOM & show it to user
      perPersonTotalDiv.innerText = `Rs${ perPersonTotal.toFixed(2)}`   
}
//** Splits the bill between more people */
const increasePeople = () => {
      // increament the amount of people
      numberOfPeople += 1

      // update the DOM with the new number of people
      numberofPeopleDiv.innerText = numberOfPeople

      // calculate the bill based on the new number of people
      calculateBill()
}

//** Splits the bill between fewer people */
const decreasePeople = () => {

      if(numberOfPeople <= 1 ){
            return
      }
      // decreament the amount of people
      numberOfPeople -= 1
 
      // update the DOM with the new number of people
      numberofPeopleDiv.innerText = numberOfPeople

        // calculate the bill based on the new number of people
        calculateBill()
}