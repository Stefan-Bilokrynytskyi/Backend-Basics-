'use strict';

export default class Record {
  constructor(id, idUser, idCategory, sumOfExpense) {
    this.id = id;
    this.idUser = idUser;
    this.idCategory = idCategory;
    this.date = new Date().toISOString().slice(0, 10);
    this.sumOfExpense = sumOfExpense;
  }
}
