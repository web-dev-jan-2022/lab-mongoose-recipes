const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/webdev";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    return Recipe.deleteMany();
  })

  // Iteration 3
  .then(() => {
    for (let i = 0; i < data.length; i++) {
      Recipe.create(data[i]);
    }
  })

  // Iteration 4
  .then(() => {
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 }
    );
  })

  // Iteration 5
  .then(() => {
    return Recipe.deleteOne({ title: "Carrot Cake" });
  })
  .then(() => console.log("Updated recipe"))

  //Iteration 6
  .then(() => {
    return mongoose.disconnect();
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
