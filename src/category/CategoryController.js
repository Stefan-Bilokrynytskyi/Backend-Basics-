'use strict';
import Category from './Category.js';

export default class CategoryController {
  async createCategory(req, res) {
    try {
      const { categoryName } = req.body;
      const category = new Category(categoryName);
      res.status(200).json(category);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
