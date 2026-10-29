function getGreeting(name) {
return "Hello, " + name
}

if (typeof window !== "undefined") {
window.addEventListener("DOMContentLoaded", () => {
const element = document.getElementById("greeting")
if (element) {
element.textContent = getGreeting("Visitor")
}
})
}

if (typeof module !== "undefined") {
module.exports = { getGreeting }
}