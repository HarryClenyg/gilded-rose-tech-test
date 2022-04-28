class BackstagePass {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if(this.sellIn <= 10){
      if(this.sellIn <= 5){
        if(this.sellIn <= 0){
          this.quality = 0;
        }else{
          this.quality += 3;
        }
      }else{
        this.quality += 2;
      }
    }else{
      this.quality += 1;
    }
  
    this.sellIn -= 1;
    return this;
  }
}

module.exports = BackstagePass;