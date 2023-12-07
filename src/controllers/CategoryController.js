const Category = require('../models/Category'); // Убедитесь, что это правильный путь к вашей модели Category

class CategoryController {
  async createCategory(req, res) {
    try {
      const { categoryName, idUser } = req.body;

      const newCategory = await Category.create({
        categoryName,
        idUser,
      });

      res.status(200).json(newCategory);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        res.status(404).json({ error: 'Category not found' });
        return;
      }

      res.status(200).json(category);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        res.status(404).json({ error: 'Category not found' });
        return;
      }

      await Category.destroy({
        where: {
          id: category.id,
        },
      });

      res.status(200).json(category);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CategoryController;
