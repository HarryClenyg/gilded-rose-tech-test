const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", -1, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  
    // This Conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6),
  );
  
  const updateItems = gildedRose.updateQuality();

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

  it("should decrease quality by 2 for items past their sellIn date", () => {
    expect(updateItems[2].quality).toBe(5);
  });

  it("should never change the quality and sellIn of Sulfuras", () => {
    expect(updateItems[3].quality).toBe(80);
    expect(updateItems[3].sellIn).toBe(0);
    expect(updateItems[4].quality).toBe(80);
    expect(updateItems[4].sellIn).toBe(-1);
  });
});