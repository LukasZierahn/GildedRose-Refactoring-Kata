const {Shop, Item} = require('../src/gilded_rose.js');

Jasmine = require('jasmine');
jasmine = new Jasmine();

jasmine.loadConfigFile('support/jasmine.json');

describe("Gilded Rose", function() {

  it("Sulfuras", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 20, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(20);
    expect(items[0].quality).toEqual(20);
  });

});

jasmine.execute();