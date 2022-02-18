
var Item = require('./item');



class LegendaryItem extends Item {
  constructor(name = 'Sulfuras, Hand of Ragnaros') {
    super(name, 0, 80);
  }

  // Legendary items like Sulfuras don't have a sell by, so the update function here is superflous.

  update() {
    console.log('Die, Insect!')
  }
}

module.exports = LegendaryItem;