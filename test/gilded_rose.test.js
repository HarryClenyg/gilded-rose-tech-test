const Shop = require("../src/gilded_rose");
const Item = require("../src/item");
const AgedBrie = require("../src/agedBrie");
const Sulfuras = require("../src/sulfuras");
const BackstagePass = require("../src/backstagePass");

describe("Gilded Rose", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new Item("+5 Dexterity Vest", 10, 20),
    new AgedBrie("Aged Brie", 2, 0),
    new AgedBrie("Aged Brie", 2, 50),
    new Item("Elixir of the Mongoose", -1, 7),
    new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20),
  
    // This Conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6),
  );
  
  const updateItems = gildedRose.updateQualityAll();

  it("should add new item to shop's item list", () => {
    expect(updateItems[0].name).toBe("+5 Dexterity Vest");
  });

  it("should reduce quality by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].quality).toBe(19);
  });

  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].sellIn).toBe(9);
  });

  it("should increase quality of aged brie each day", () => {
    expect(updateItems[1].quality).toBe(1);
  });

  it("should cap the quality of an item at 50", () => {
    expect(updateItems[2].quality).toBe(50);
  });

  it("should decrease quality by 2 for items past their sellIn date", () => {
    expect(updateItems[3].quality).toBe(5);
  });

  it("should never change the quality and sellIn of Sulfuras", () => {
    expect(updateItems[4].quality).toBe(80);
    expect(updateItems[4].sellIn).toBe(0);
    expect(updateItems[5].quality).toBe(80);
    expect(updateItems[5].sellIn).toBe(-1);
  });

  it("should increase quality of Backstage Passes by 1 each day when more than 10 days to event", () => {
    expect(updateItems[6].quality).toBe(21);
  });

  it("should increase quality of Backstage Passes by 2 each day when there are between 6 and 10 days (inclusive) to event", () => {
    expect(updateItems[7].quality).toBe(22);
  });

  it("should increase quality of Backstage Passes by 3 each day when there are between 0 and 5 days (inclusive) to event", () => {
    expect(updateItems[8].quality).toBe(23);
  });

  it("should set quality of Backstage Passes to 0 once event has passed", () => {
    expect(updateItems[9].quality).toBe(0);
  });
});