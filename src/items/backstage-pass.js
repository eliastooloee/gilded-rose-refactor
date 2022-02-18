
const Item = require('./item');


// BackStagePass requires Item so it can inherit from Item

class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }


  // imminenceQuality Function is responsible for determining the appropriate
  //quality. Tickets get increase in price as the event draws closer, but
  //prices go to zero once the event has already happened. 
  imminenceQuality() {
    if (this.sellIn < 0) return 0;
    if (this.sellIn <= 5) return this.quality + 3;
    if (this.sellIn <= 10) return this.quality + 2;
    return this.quality + 1;
  }

  // the update function decrements sellIn, then sets quality by finding the lower value
  // of 50 and whatever is returned from imminenceQuality.
  update() {
    this.sellIn -= 1;
    this.quality = Math.min(50, this.imminenceQuality());
  }
}

module.exports = BackstagePass;