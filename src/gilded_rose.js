
// Requires items from the item folder to make them accessible in the shop

const {
  AgedBrie,
  RandomItem,
  BackstagePass,
  LegendaryItem,
  ConjuredItem,
} = require('./items/itemlist');



// The shop class adresses the separation of different items in the constructor,
// rather than in the upDateQuality function as it did in the original.  
class Shop {
  constructor(items = []) {
    // The JavaScript native map operator is used in assinging the items attribute
    this.items = items.map((item) => {
      // We can use a switch statement instead of nested conditionals
      switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros': return new LegendaryItem();
        case 'Aged Brie': return new AgedBrie(item.sellIn, item.quality);
        case 'Backstage passes to a TAFKAL80ETC concert': return new BackstagePass(item.sellIn, item.quality);
        case 'Conjured Item': return new ConjuredItem(item.name, item.sellIn, item.quality);
        default: return new RandomItem(item.name, item.sellIn, item.quality);
      }
    });
  }

  // Rather than being a hideous mess like the orignal, the updateQuality
  // function is now a simple call to each item type's update function. 
  // This means we don't have to re-write this function if we want to add
  // new items in the future.  
  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
}

module.exports = {
  Shop,
};

// class Item {
//     constructor(name, sellIn, quality){
//       this.name = name;
//       this.sellIn = sellIn;
//       this.quality = quality;
//     }
//   }
  
//   class Shop {
//     constructor(items=[]){
//       this.items = items;
//     }



//     updateQuality() {
//       for (let i = 0; i < this.items.length; i++) {
//         if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].quality > 0) {
//             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               this.items[i].quality = this.items[i].quality - 1;
//             }
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//             if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//               if (this.items[i].sellIn < 11) {
//                 if (this.items[i].quality < 50) {
//                   this.items[i].quality = this.items[i].quality + 1;
//                 }
//               }
//               if (this.items[i].sellIn < 6) {
//                 if (this.items[i].quality < 50) {
//                   this.items[i].quality = this.items[i].quality + 1;
//                 }
//               }
//             }
//           }
//         }
//         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           this.items[i].sellIn = this.items[i].sellIn - 1;
//         }
//         if (this.items[i].sellIn < 0) {
//           if (this.items[i].name != 'Aged Brie') {
//             if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//               if (this.items[i].quality > 0) {
//                 if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                   this.items[i].quality = this.items[i].quality - 1;
//                 }
//               }
//             } else {
//               this.items[i].quality = this.items[i].quality - this.items[i].quality;
//             }
//           } else {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1;
//             }
//           }
//         }
//       }
  
//       return this.items;
//     }
//   }
  
//   module.exports = {
//     Item,
//     Shop
//   }