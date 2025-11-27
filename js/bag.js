import calcBag from "./modules/bag/calcBag.js";
import getBagArray from "./modules/bag/getBag.js"
import printBagList from "./modules/bag/printBagList.js";
import Footer from "../components/footer.js";


document.addEventListener('DOMContentLoaded', function () {
    let productsArray

    if (localStorage.getItem('products') && localStorage.getItem('bag')) {
        productsArray =  JSON.parse(localStorage.getItem('bag'))
    } else {
        localStorage.setItem('bag', JSON.stringify([]))
        productsArray = getBagArray()
    }

    
    
    productsArray.forEach(element => {
        printBagList(element)
    });
    
    Footer()
    calcBag()
})

