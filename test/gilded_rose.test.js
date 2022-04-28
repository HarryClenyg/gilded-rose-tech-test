const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should add new item to shop's item list", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
  });
});