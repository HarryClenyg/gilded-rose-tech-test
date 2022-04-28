const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
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
});