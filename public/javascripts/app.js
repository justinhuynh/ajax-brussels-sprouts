$("#get-dish").on("click", function() {
  $.get("/dishes.json", function(randomDish) {
    alert("Your random dish is: " + randomDish["dish"]);
  });
});
