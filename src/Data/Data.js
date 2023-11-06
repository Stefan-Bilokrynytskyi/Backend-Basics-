'use strict';
import User from '../users/User.js';
import Category from '../category/Category.js';
import Record from '../record/Record.js';

const Data = {
  users: [],
  categories: [],
  records: [],
};

const user = new User(Data.users.length, 'user1');
Data.users.push(user);
const category = new Category(Data.categories.length, 'category1');
Data.categories.push(category);
const record = new Record(
  Data.records.length,
  user.id,
  category.id,
  '2021-01-01',
  100
);
Data.records.push(record);
export default Data;
