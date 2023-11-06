'use strict';

export default class Record {
  constructor(id, idUser, idCategory, date, sumOfExpense) {
    this.id = id;
    this.idUser = idUser;
    this.idCategory = idCategory;
    this.date = date;
    this.sumOfExpense = sumOfExpense;
  }
}
