const Item = require("../src/item");
const AgedBrie = require("../src/agedBrie");
const Sulfuras = require("../src/sulfuras");
const BackstagePass = require("../src/backstagePass");
const Conjured = require("../src/Conjured");

class Shop {
  constructor(
    items = [], 
    itemClass = Item,
    agedBrieClass = AgedBrie,
    sulfurasClass = Sulfuras,
    backstagePassClass= BackstagePass,
    conjuredClass = Conjured
    ){
      this.items = items;
      this.itemClass = itemClass;
      this.agedBrieClass = agedBrieClass;
      this.sulfurasClass = sulfurasClass;
      this.backstagePassClass = backstagePassClass;
      this.conjuredClass = conjuredClass;
  }

  addItem(category, name, sellIn, quality) {
    if(category === "item"){
      this.items.push(new this.itemClass(name, sellIn, quality));
    }else if(category === "aged brie"){
      this.items.push(new this.agedBrieClass(name, sellIn, quality));
    }else if(category === "sulfuras"){
      this.items.push(new this.sulfurasClass(name, sellIn, quality));
    }else if(category === "backstage pass"){
      this.items.push(new this.backstagePassClass(name, sellIn, quality));
    }else if(category === "conjured"){
      this.items.push(new this.conjuredClass(name, sellIn, quality));
    }
    return this.items
  }
  
  updateQualityAll() {
    this.items.forEach((item) => {
      item.updateQuality()
    });
    return this.items
  }
}

module.exports = Shop;