const Item = require("../src/item");

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQualityAll() {
    this.items.forEach((item) => {
      item.updateQuality()
    });
    return this.items
  }
}

module.exports = Shop;