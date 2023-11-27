'use strict';
import Record from './Record.js';
import Data from '../Data/Data.js';

export default class RecordController {
  createRecord(req, res) {
    try {
      const { idUser, idCategory, sumOfExpense } = req.body;
      const record = new Record(
        Data.records.length + 1,
        Number(idUser),
        Number(idCategory),
        sumOfExpense
      );
      Data.records.push(record);
      res.status(200).json(record);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  getRecord(req, res) {
    try {
      const { id } = req.params;
      const data = Data.records.find((record) => record.id === Number(id));
      res.status(200).json(data);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  deleteRecord(req, res) {
    try {
      const { id } = req.params;
      const record = Data.records.find((record) => record.id === Number(id));
      Data.records = Data.records.filter((record) => record.id !== Number(id));
      res.status(200).json(record);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  getRecords(req, res) {
    try {
      const { user_id, category_id } = req.query;

      let records = Data.records;

      if (user_id) {
        records = records.filter((record) => record.idUser === Number(user_id));
      }
      if (category_id) {
        records = records.filter(
          (record) => record.idCategory === Number(category_id)
        );
      }
      if (!user_id && !category_id) {
        throw new Error('Missing query parameters');
      }
      res.status(200).json(records);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
