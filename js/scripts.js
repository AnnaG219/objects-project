function Orders() {
  this.pizzaOrders = []
  this.currentId = 0
}

Orders.prototype.addPizzaOrder = function(pizzaOrder) {
  pizzaOrder.id = thisassignId();
  this.pizzaOrders.push(pizzaOrder);
}

Orders.prototype.assignId = function (pizzaOrder) {
  this.currentId += 1;
  return this.currentId;
}

function pizzaOrder (firstName, phoneNumber,size,toppings,crust,cost) {
  this.firstName: firstName,
  this.phoneNumber,
  this.size: size,
  this.toppings: toppings,
  this.crust: crust,
  this.cost: cost,
}

$(document).ready(function() {
  $("form#pizza-creator").submit(funtion(event) {
    event.preventDefault();

  });
});
