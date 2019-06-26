class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function BackstagePass(item) {
  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = 0;
    return;
  }

  item.quality = Math.min(item.quality + 1, 50);
  if (item.sellIn < 11) {
    item.quality = Math.min(item.quality + 1, 50);
    if (item.sellIn < 6) {
      item.quality = Math.min(item.quality + 1, 50);
    }
  }

  
}

class Shop {
  legendaryItems = ['Sulfuras, Hand of Ragnaros']
  increasingQuality = ['Aged Brie']

  specialItems = { 'Backstage passes to a TAFKAL80ETC concert' : BackstagePass }

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var item of this.items) {

      if (item in this.specialItems) {
        this.specialItems[item](item);
        continue;
      }

      if (item in this.legendaryItems) {
        continue;
      }

      item.sellIn = item.sellIn - 1;

      if (item in this.increasingQuality) {
        item.quality = Math.min(item.quality + 1, 50);
      } else {
        item.quality = Math.max(item.quality - 1, 0);
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
