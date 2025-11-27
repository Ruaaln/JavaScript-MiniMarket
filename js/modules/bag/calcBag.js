import getBagArray from "./getBag.js"

function calcBag() {
    let total = getBagArray()
        .reduce((total, current) => total + current.totalOfProduct, 0)
    document.querySelector('#priceOfBag').innerText = total
    document.querySelector('#TootalFoter').innerText = `${total}$`
    return total
}

export default calcBag