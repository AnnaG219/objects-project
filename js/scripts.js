function Orders {
  this.pizza = []
}

Orders.prototype.addPizzaOrder =
function(pizzaOrder) {
  this.pizzaOrders.push(pizzaOrder);
}

function pizzaOrder (firstName, phoneNumber,size,toppings,crust) {
  this.firstName: firstName,
  this.phoneNumber,
  this.size: size,
  this.toppings: toppings,
  this.crust: crust,
}

$(document).ready(function(){
  $("form#pizza-creator").submit(funtion(event) {
    event.preventDefault();

  });
});
