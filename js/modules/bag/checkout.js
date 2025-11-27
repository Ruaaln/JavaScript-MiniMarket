// ----- checkout formunu acan funksya -----
const checkout = () => {
    const popup = document.createElement("div")
    popup.classList.add("checkout-popup")

    popup.innerHTML = `
        <div class="checkout-box">
            <h2>Complete Order</h2>

            <input id="orderName" type="text" placeholder="Your name">
            <input id="orderNumber" type="text" placeholder="Phone number">
            <input id="orderAddress" type="text" placeholder="Address">

            <button id="confirmOrderBtn">Confirm Order</button>
            <button id="closeCheckout">Close</button>
        </div>
    `

    document.body.appendChild(popup)

    document
        .querySelector("#closeCheckout")
        .addEventListener("click", () => popup.remove())

    document
        .querySelector("#confirmOrderBtn")
        .addEventListener("click", confirmOrder)
}


const confirmOrder = () => {
    const name = document.querySelector("#orderName").value
    const number = document.querySelector("#orderNumber").value
    const address = document.querySelector("#orderAddress").value

    if (!name || !number || !address) {
        alert("All fields required!")
        return
    }

    const bag = JSON.parse(localStorage.getItem("bag")) || []

    const order = {
        id: Date.now(),
        name,
        number,
        address,
        products: bag
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || []
    orders.push(order)
    localStorage.setItem("orders", JSON.stringify(orders))

    localStorage.setItem("bag", JSON.stringify([]))

    alert("Order completed!")

    document.querySelector(".checkout-popup").remove()

    location.reload()
}

export default checkout
