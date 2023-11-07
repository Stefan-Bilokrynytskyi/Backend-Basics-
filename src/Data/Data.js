'use strict';
import User from '../users/User.js';
import Category from '../category/Category.js';
import Record from '../record/Record.js';

const Data = {
  users: [],
  categories: [],
  records: [],
};

const user1 = new User(Data.users.length + 1, 'John');
Data.users.push(user1);
const category1 = new Category(Data.categories.length + 1, 'Food');
Data.categories.push(category1);
const record1 = new Record(
  Data.records.length + 1,
  user1.id,
  category1.id,
  100
);
Data.records.push(record1);
export default Data;
