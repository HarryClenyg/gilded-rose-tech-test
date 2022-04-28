const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
  const items = gildedRose.updateQuality();

  it("should add new item to shop's item list", () => {
    expect(items[0].name).toBe("+5 Dexterity Vest");
  });

  it("should reduce quality by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(items[0].quality).toBe(19);
  });

  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(items[0].sellIn).toBe(9);
  });
});