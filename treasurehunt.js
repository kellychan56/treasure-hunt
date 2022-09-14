var infinityStone = Math.floor(Math.random() * 16)
var thanos = Math.floor(Math.random() * 16)
if (infinityStone === thanos) {
    var infinityStone = Math.floor(Math.random() * 16)
    var thanos = Math.floor(Math.random() * 16)
}

const treasure = (location) => {
    if (location === infinityStone) {
        document.getElementById("game").innerHTML = "YOU FOUND THE INFINITY STONE! 💎"
        setTimeout(3000)
        alert("Now go bring everyone back.")
        window.location.reload()
    } else if (location === thanos) {
        document.getElementById("game").innerHTML = "Thanos is here. You fight him and lose. ☠"
        setTimeout(3000)
        alert("You lost the Infinity Stone.")
        window.location.reload()
    } else {
        document.getElementById(location).innerHTML = "The Infinity Stone is not here. Keep searching! 🏃‍♀️"
    }
}
