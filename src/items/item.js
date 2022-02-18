
// The basic class, item, from which all unique items will inherit

class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  module.exports = Item;