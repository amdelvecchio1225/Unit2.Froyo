const items = [
    {id: 1, name: "vanilla", price: 3.50},
    {id: 2, name: "coffee", price: 4.00},
    {id: 3, name: "strawberry", price: 3.75}
]
let userInput = prompt("Please enter your desired ice cream flavors with commas in between (i.e. vanilla, strawberry, coffee)")
let flavorArray = userInput.split(",")
