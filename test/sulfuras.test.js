const Shop = require("../src/gilded_rose");
const Sulfuras = require("../src/sulfuras");

describe("Aged Brie", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80)
  );
  
  const updateItems = gildedRose.updateQualityAll();

  it("should add new item to shop's item list", () => {
    expect(updateItems[0].name).toBe("Sulfuras, Hand of Ragnaros");
  });

  it("should never change the quality and sellIn of Sulfuras", () => {
    expect(updateItems[0].quality).toBe(80);
    expect(updateItems[0].sellIn).toBe(0);
    expect(updateItems[1].quality).toBe(80);
    expect(updateItems[1].sellIn).toBe(-1);
  });
});
