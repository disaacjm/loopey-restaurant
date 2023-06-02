const mongoose = require("mongoose");
const Pizza = require("../models/Pizza.model");

mongoose
  .connect("mongodb://127.0.0.1/loopeyRestaurant")
  .then((x) => {
    console.log(`Connected! Database name: "${x.connections[0].name}"`);

    return Pizza.deleteMany({}); //WARNING: this will delete all pizzas in your DB !!
  })
  .then((response) => {
    console.log(response);

    const newPizzasArr = [
      {
        title: "margarita",
        price: 12,
        ingredients: ["mozzarella", "tomato sauce", "basilicum"],
        imageFile: "pizza_margarita.jpg",
        isVeggie: true,
        dough: "classic",

      },
      {
        title: "veggie",
        price: 15,
        ingredients: ["tomato", "cucumber", "olives"],
        imageFile: "pizza_veggie.jpg",
        isVeggie: true,
        dough: "extra thin",
      },
      {
        title: "seafood",
        price: 20,
        ingredients: ["mozzarella", "tomato", "prawn"],
        imageFile: "pizza_seafood.jpg",
        isVeggie: false,
        dough: "with garlic"
      },
      {
        title: "hawaiian",
        price: 17,
        ingredients: ["mozzarella", "pineapple", "patience..."],
      },
    ];

    return Pizza.insertMany(newPizzasArr);
  })
  .then((pizzaArrFromDB) => {
    //chef, our pizzas were created :)
    console.log("Number of pizzas created: ", pizzaArrFromDB.length);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error... ", err));
