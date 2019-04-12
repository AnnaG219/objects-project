pizza {
  size: size,
  toppings: toppings,
  cheese: cheese,
  crust: crust,
}

$(document).ready(function(){
  $("form#pizza-creator").submit(funtion(event) {
    event.preventDefault();

  });
});
