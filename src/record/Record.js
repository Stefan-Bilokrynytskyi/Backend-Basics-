'use strict';

export default class Record {
  constructor(id, idUser, idCategory, sumOfExpense) {
    this.id = id;
    this.idUser = idUser;
    this.idCategory = idCategory;
    this.date = this.formatDate(new Date());
    this.sumOfExpense = sumOfExpense;
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}, ${hours}:${minutes}`;
  }
}
