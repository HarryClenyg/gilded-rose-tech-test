const Shop = require("../src/gilded_rose");
const Conjured = require("../src/conjured");

describe("Normal Items", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new Conjured("Conjured Mana Cake", 3, 6),
    new Conjured("Conjured Mana Cake", 3, 0),
    new Conjured("Conjured Mana Cake", -1, 6)
  );
  
  const updateItems = gildedRose.updateQualityAll();

  it("should add new item to shop's item list", () => {
    expect(updateItems[0].name).toBe("Conjured Mana Cake");
  });

  it("should reduce quality by 2 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].quality).toBe(4);
  });

  it("should not let quality drop below 0", () => {
    expect(updateItems[1].quality).toBe(0);
  });

  it("should decrease quality by 4 for items past their sellIn date", () => {
    expect(updateItems[2].quality).toBe(2);
  });

  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].sellIn).toBe(2);
  });
});
