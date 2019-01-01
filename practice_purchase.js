'use strict'

function phonePurchase(phoneInfo) {
  const TAX_RATE = 0.05
  let balance = Number(prompt('What is your bank balance?'))
  let phoneCost = Number( prompt('How much does the phone cost?'))
  let accessoryCost = Number(prompt('How much does the accessory cost?'))
  let spending = Number(prompt('What is your spending threshold?'))
  let total = 0

  function addPhone() {
    let canAfford = `Phone added at $${phoneCost.toFixed(2)}`
    let canNotAfford = `You can not afford this phone.` 
  
    if (phoneCost <= balance) {
      console.log(canAfford)
      total = total + phoneCost
    } else {
      console.log(canNotAfford)
    }
  }

  function addAccessory() {
    let canAfford = `Accessory added at $${accessoryCost.toFixed(2)}`
    let canNotAfford = `Adding an accessory exceeds your spending budget.`
    let combinedCost = accessoryCost + total
  
    if (accessoryCost > spending || combinedCost > balance) {
      console.log(canNotAfford)
    } else {
      console.log(canAfford)
      total += accessoryCost
    }
  }

  function addTax() {
    total += total * TAX_RATE
    let canAfford = `Your final total w tax is $${total.toFixed(2)}.`
    let canNotAfford = `The total w tax: $${total.toFixed(2)} bankrupts you!` 
  
    total > balance ? console.log(canNotAfford) : console.log(canAfford)
  }

  addPhone()
  addAccessory()
  addTax()
}
