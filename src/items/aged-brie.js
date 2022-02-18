
const Item = require('./item');

//AgedBrie requires item so it can inherit 

class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  // Aged bri gets better with age, especially past the sell by date, 
  //so its update function checks the sellIn value to increment quality.
  update() {
    this.sellIn -= 1;
    this.quality = Math.min(50, (this.sellIn > 0 ? this.quality + 1 : this.quality + 2));
  }
}

module.exports = AgedBrie;