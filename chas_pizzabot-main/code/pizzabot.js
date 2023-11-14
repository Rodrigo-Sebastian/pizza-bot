const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
let cookingTime = 0;

//Put your Javscript code here:

//Testar att Javascript fungerar som det ska och dess varaibler svarar på consolen.
console.log("Welcome to my Pizzeria!");
console.log("This is a", vegetarian, "Pizza!");
console.log("This is a", hawaiian, "Pizza");
console.log("This is a", pepperoni, "Pizza");
console.log("The price is all the same for each pizza! the price is", pizzaPrice, "kr");


// task 1.2 - Greating the custoner
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`);

// task 2.3 - ask the user wich pizza they want and how many.
const orderName = prompt("choes wich pizza you would like to have");

/*
if (orderName){
    const orderQantity = prompt(`How many of ${orderName} do you want?`);
    if (orderQantity){
        const totalCost = pizzaPrice * parseInt(orderQantity);
        alert(`You have order ${orderName} pizza(s). Your total cost will be $${totalCost}. Thank you for your order!`);
    }else{
        alert("Invalid quantity input. Please refresh the page and try again.");
    }
}else{
    alert("Invalid quantity input. Please refresh the page and try again.");
}

//task 3 - Conditionals
/*
if(orderName){
    if(orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        const orderQuantity = prompt(`How manu of ${orderName} do you want?`);

        if (orderQuantity){
            orderQuantity = parseInt(orderQuantity);
            if(orderQuantity >= 1 && orderQuantity <= 2){
                cookingTime = 10;
            }else if(orderQuantity >= 3 && orderQuantity <= 5){
                cookingTime = 15;
            }else if(orderQuantity >= 6){
                cookingTime = 20;
            }else{
                alert("Invalid quantity input. Please refresh the page and try again.");
            }
        
            const totalCost = pizzaPrice * orderQuantity;
            alert(`Great, I will get started on your ${orderName} right away, it will cost you ${totalCost} kr. the pizza will tak ${cookingTime} minutes.`);
            }else{
            alert("Invalid quantity input. Please refresh the page and try again.");
            }
        }else{
            alert("Sorry, we dont have that pizza o nthe menu. Pleas refresh the apge and try again.");
        }
}else{
    alert("Invalid pizza name input. Please refresh the page and try again.");
}
*/

/*
if (orderName) {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
      const orderQuantityInput = prompt(`How many of ${orderName} do you want?`);
  
      if (orderQuantityInput) {
        orderQuantity = parseInt(orderQuantityInput);
  
        if (orderQuantity >= 1 && orderQuantity <= 2) {
          cookingTime = 10;
        } else if (orderQuantity >= 3 && orderQuantity <= 5) {
          cookingTime = 15;
        } else if (orderQuantity >= 6) {
          cookingTime = 20;
        } else {
          alert("Invalid quantity input. Please refresh the page and try again.");
        }
  
        const totalCost = pizzaPrice * orderQuantity;
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost} kr. The pizzas will take ${cookingTime} minutes.`);
      } else {
        alert("Invalid quantity input. Please refresh the page and try again.");
      }
    } else {
      alert("Sorry, we don't have that pizza on the menu. Please refresh the page and try again.");
    }
  } else {
    alert("Invalid pizza name input. Please refresh the page and try again.");
  }*/

/**Task 3 to 4**/

  function checkOrderName(orderName) {
    return orderName === "Vegetarian Pizza" || orderName === "Hawaiian Pizza" || orderName === "Pepperoni Pizza";
}

function totalCost(orderQuantity) {
    return pizzaPrice * orderQuantity;
}

function calculateCookingTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else if (orderQuantity >= 6) {
        return 20;
    } else {
        return -1; // Invalid quantity
    }
}

function processOrder() {
    const orderName = document.getElementById("pizzaChoice").value;
    const orderQuantity = parseInt(document.getElementById("quantity").value);

    if (checkOrderName(orderName) && !isNaN(orderQuantity) && orderQuantity > 0) {
        const cost = totalCost(orderQuantity);
        const time = calculateCookingTime(orderQuantity);

        if (time !== -1) {
            document.getElementById("result").innerHTML = `Great, I'll get started on your ${orderName} right away. It will cost ${cost} kr. The pizzas will take ${time} minutes.`;
        } else {
            document.getElementById("result").innerHTML = "Invalid quantity input. Please enter a valid quantity.";
        }
    } else {
        document.getElementById("result").innerHTML = "Invalid input. Please select a valid pizza and enter a valid quantity.";
    }
}