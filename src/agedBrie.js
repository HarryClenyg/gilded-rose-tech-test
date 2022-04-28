class AgedBrie {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
  if(50 > this.quality){  
    this.quality += 1
    }
  return this;
  }
}

module.exports = AgedBrie;