let totalElement = document.getElementById("total")
let amount = 0
function change (num) {
    amount = amount + num
    totalElement.innerHTML = amount
}