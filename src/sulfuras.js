class Sulfuras {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
  return this;
  }
}

module.exports = Sulfuras;