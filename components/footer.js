import checkout from "../js/modules/bag/checkout.js"

const Footer = () => {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    footer.innerHTML = `
        <p>Total price:</p>
        <span id="TootalFoter">0$</span>
        <button id="Cecked">Get all product</button>
        <button id="openOrders">Orders</button>
    `

    document.body.appendChild(footer)

    document.querySelector("#Cecked").addEventListener("click", () => checkout())

    document.querySelector("#openOrders").addEventListener("click", () => {
        window.location.href = "orders.html"
    })
}

export default Footer
