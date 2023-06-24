const Recipe = require('../models/Recipe');



exports.createRecipe = (req, res) => {
        
        Recipe.create({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
        })
};

exports.getRecipeById = (req, res) => {
        
        Recipe.findById(req.params.id)
        .then((recipe) => {
            res.json(recipe);
        }
        )
};

exports.updateRecipe = (req, res) => {
    
    Recipe.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    })


};

exports.deleteRecipe = (req, res) => {
  //delete recipe method
    Recipe.findByIdAndDelete(req.params.id)
    .then((recipe) => {
        res.json(recipe);
    }
    )
};
