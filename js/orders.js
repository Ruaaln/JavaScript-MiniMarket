const ordersList = document.querySelector("#ordersList")

let orders = JSON.parse(localStorage.getItem("orders")) || []

if (orders.length === 0) {
    ordersList.innerHTML = "<p>No previous orders.</p>"
} else {
    orders.forEach(order => {
        const div = document.createElement("div")
        div.classList.add("orderBox")

        div.innerHTML = `
            <h3>Order #${order.id}</h3>
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Number:</strong> ${order.number}</p>
            <p><strong>Address:</strong> ${order.address}</p>

            <p><strong>Products:</strong></p>
            <ul>
                ${order.products.map(p => `<li>${p.name} — ${p.totalOfProduct}$</li>`).join("")}
            </ul>
        `

        ordersList.appendChild(div)
    })
}
