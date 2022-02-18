
const Item = require('./item');
const AgedBrie = require('./aged-brie');
const BackstagePass = require('./backstage-pass');
const LegendaryItem = require('./legendary-item');
const RandomItem = require('./random-item');
const ConjuredItem = require('./conjured-item');

//this file exists purely to export the items to the gilded rose file.
//doing it this way runs faster than directly importing.

module.exports = {
  Item,
  AgedBrie,
  BackstagePass,
  LegendaryItem,
  RandomItem,
  ConjuredItem,
};