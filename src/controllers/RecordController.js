const Category = require('../models/Category');
const Record = require('../models/Record');
class RecordController {
  async createRecord(req, res) {
    try {
      const { idCategory, sumOfExpense } = req.body;
      const idUser = req.user.id;

      const category = await Category.findByPk(idCategory);

      if (!category) {
        res.status(404).json({ error: 'Category does not exist' });
        return;
      }

      if (category.idUser !== null && category.idUser !== idUser) {
        res.status(403).json({ error: 'Access denied' });
        return;
      }

      const newRecord = await Record.create({
        idUser,
        idCategory,
        sumOfExpense,
      });

      res.status(200).json(newRecord);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: error.message });
    }
  }

  async getRecord(req, res) {
    try {
      const { id } = req.params;
      const record = await Record.findByPk(id);

      if (!record) {
        res.status(404).json({ error: 'Record not found' });
        return;
      }

      res.status(200).json(record);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      const record = await Record.findByPk(id);
      if (record.idUser !== req.user.id) {
        res.status(403).json({ error: 'Access denied' });
        return;
      }
      if (!record) {
        res.status(404).json({ error: 'Record not found' });
        return;
      }

      await Record.destroy({
        where: {
          id: record.id,
        },
      });

      res.status(200).json(record);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getRecords(req, res) {
    try {
      const { user_id, category_id } = req.query;

      let records;

      if (user_id && category_id) {
        records = await Record.findAll({
          where: { idUser: user_id, idCategory: category_id },
        });
      } else if (user_id) {
        records = await Record.findAll({
          where: { idUser: user_id },
        });
      } else if (category_id) {
        records = await Record.findAll({
          where: { idCategory: category_id },
        });
      } else {
        throw new Error('Missing query parameters');
      }

      res.status(200).json(records);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = RecordController;
