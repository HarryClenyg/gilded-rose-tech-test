const Shop = require("../src/gilded_rose");
const Item = require("../src/item");

describe("Normal Items", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("+5 Dexterity Vest", 10, 0),
    new Item("Elixir of the Mongoose", -1, 7),
  );
  
  const updateItems = gildedRose.updateQualityAll();

  it("should add new item to shop's item list", () => {
    expect(updateItems[0].name).toBe("+5 Dexterity Vest");
  });

  it("should reduce quality by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].quality).toBe(19);
  });

  it("should not let quality drop below 0", () => {
    expect(updateItems[1].quality).toBe(0);
  });

  it("should decrease quality by 2 for items past their sellIn date", () => {
    expect(updateItems[2].quality).toBe(5);
  });

  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].sellIn).toBe(9);
  });
});
