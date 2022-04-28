class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if(0 < this.quality){  
      if(this.sellIn >= 0){
        this.quality -= 1
      } else {
        this.quality -= 2
      }
    }
    this.sellIn -= 1;
    return this;
  }
}

module.exports = Item;