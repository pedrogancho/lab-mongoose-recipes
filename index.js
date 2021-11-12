const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    const newRecipe = {
      title: "Ramen",
      level: "Amateur Chef",
      ingredients: ["Rice", "Meat", "Eggs"],
      cuisine: "Asian",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: "30"
      creator: "Uros"
      created: "15/06/2020"
    }
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  const Recipe = mongoose.('Recipe', recipeSchema) {
    console.log ("recipeSchema.title")}


  Recipe.deleteMany() 
    .then(() => Recipe.insertMany(data)) 

    .then(recipes => {
      console.log("recipes added!")
      return Recipe.updateOne({title: "Rigatoni alla Genovese"}, {duration: 100})
    })
    .then(recipe => {
      console.log("recipe updated")
      return Recipe.deleteOne({title: "Carrot Cake"}) 
    })
    .then(info => {
      console.log("recipe deleted", info);
    }) 
    .then(() => mongoose.disconnect())
    .catch(err => {console.log(err)})
  
  
