const {Shop, Item} = require('../src/gilded_rose.js');
const  OldShop = require('../src/gilded_rose_original.js').Shop;

Jasmine = require('jasmine');
jasmine = new Jasmine();

jasmine.loadConfigFile('support/jasmine.json');

describe("Gilded Rose", function() {

  items = ["Sulfuras, Hand of Ragnaros", "Aged Brie", "Backstage passes to a TAFKAL80ETC concert", "4Str 4Stm Lether Belt", "Wooden Dagger"]

  for (var item in items) {
    const gildedRose = new Shop([ new Item(item, 50, 50) ]);
    const compareRose = new OldShop([ new Item(item, 50, 50) ]);

    for (var i = 0; i < 100; i++) {
      it(item, function() {
          const newitems = gildedRose.updateQuality();
          const compareItems = compareRose.updateQuality();

          expect(newitems[0].sellIn).toEqual(compareItems[0].sellIn);
          expect(newitems[0].quality).toEqual(compareItems[0].quality);
          expect(newitems[0].name).toEqual(compareItems[0].name);
      });
    }
  }

});

jasmine.execute();