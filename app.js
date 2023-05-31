const express = require("express");
const hbs = require("hbs")
const app = express();

app.use(express.static("public")); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); // tells our Express app where to look for our views

app.set("view engine", "hbs"); // sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials


// app.get(path, code);
// app.get(path, (req, res, next) => {});

// GET /
app.get("/", (req, res, next) => {
  console.log("we have received a request for the HOMEPAGE");

  res.render("home-page")
});

// GET /contact
app.get("/contact", (req, res, next) => {
  res.render("contact-page")
});

app.get("/pizzas/margarita", (req, res, send) => {
  // res.send("page for margarita");

  const pizzaDetails = {
    title: "Pizza Margarita",
    price: 12,
    imageFile: "pizza_margarita.jpg",
    ingredients: ['mozzarella', 'tomato sauce', 'basilicum'],
  };
  res.render("product", pizzaDetails);
});

app.get("/pizzas/veggie", (req, res, send) => {
  // res.send("page for veggie")
  const pizzaDetails = {
    title: "Pizza Veggie",
    price: 14,
    imageFile: "pizza_veggie.jpg",
    ingredients: ['cherry tomatoes', 'basilicum', 'Olives'],
  };
  res.render("product", pizzaDetails);
});

app.get("/pizzas/seafood", (req, res, send) => {
  // res.send("page for seafood")
  const pizzaDetails = {
    title: "Pizza Seafood",
    imageFile: "pizza_seafood.jpg",
    ingredients: ['tomato sauce', 'garlic', 'prawn'],
  };

  res.render("product", pizzaDetails);
});

app.listen(3000, () => {
  console.log("server listening on port 3000...");
});
