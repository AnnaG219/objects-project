function Customer (firstName, phoneNumber) {
  this.firstName= firstName,
  this.phoneNumber= phoneNumber,
  this.orders = []
}

Customer.prototype.addOrder = function(order) {
  this.orders.push(order);
}

function Order () {
  this.size= null,
  this.toppings= []
}

Order.prototype.cost = function () {
  var total = 0
  if (this.size === "Medium") {
    total += 12.99
  }
  else if (this.size === "Large") {
    total += 13.99
  }
  else if (this.size === "X-Large") {
    total += 15.99
  }
  else {
    return false
  }
  total += this.toppings.length * 0.25
  return total
}


$(document).ready(function() {
  $("form#pizza-creator").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#customer-name").val();
    var phoneNumber = $("input#customer-number").val();
    var newCustomer = new Customer(firstName, phoneNumber);
    var newOrder = new Order();
    newOrder.size = $("#pizzaSize").val();
    var checkTopping = $("input:checkbox[name=toppings]:checked")
    for (var i=0; i < checkTopping.length; i++ ) {
      newOrder.toppings.push(checkTopping[i])
    }
    var cost = newOrder.cost();
    if (cost === false) {
      alert("Please select a size.")
      return
    }
    $("#results").text("Your Order: " + newCustomer.firstName + " " + newCustomer.phoneNumber + " " + newOrder.cost() + " " + newOrder.size);
    for(var i=0;i < newOrder.toppings.length; i++) {
      $("#toppingsList").append("<li> " + newOrder.toppings[i] + "</li>");
    }
  });
});
