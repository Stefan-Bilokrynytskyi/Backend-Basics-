'use strict';
import Category from './Category.js';
import Data from '../Data/Data.js';

export default class CategoryController {
  createCategory(req, res) {
    try {
      const { categoryName } = req.body;
      const category = new Category(Data.categories.length + 1, categoryName);
      Data.categories.push(category);
      res.status(200).json(category);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  getCategory(req, res) {
    try {
      const { id } = req.params;
      const data = Data.categories.find(
        (category) => category.id === Number(id)
      );
      res.status(200).json(data);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = Data.categories.find(
        (category) => category.id === Number(id)
      );
      Data.categories = Data.categories.filter(
        (category) => category.id !== Number(id)
      );
      res.status(200).json(category);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  getCategories(req, res) {
    try {
      const data = Data.categories;
      res.status(200).json(data);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
