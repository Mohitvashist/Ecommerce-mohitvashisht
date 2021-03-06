const slugify = require("slugify");
const category = require("./../models/Categories");

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new category(categoryObj);
  cat.save((err, category) => {
    if (err)
      return res.status(400).json({
        error,
      });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

exports.getCategories = (req, res) => {
  category.find({}).exec((err, category) => {
    if (err) return res.status(400).json({ error });
    if (category) {
      res.status(200).json({ category });
    }
  });
};
