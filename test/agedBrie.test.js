const Shop = require("../src/gilded_rose");
const AgedBrie = require("../src/agedBrie");

describe("Aged Brie", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new AgedBrie("Aged Brie", 2, 0),
    new AgedBrie("Aged Brie", 2, 50),
  );
  
  const updateItems = gildedRose.updateQualityAll();

  it("should add new item to shop's item list", () => {
    expect(updateItems[0].name).toBe("Aged Brie");
  });

  it("should increase quality of aged brie each day", () => {
    expect(updateItems[0].quality).toBe(1);
  });

  it("should cap the quality of an aged brie at 50", () => {
    expect(updateItems[1].quality).toBe(50);
  });
});
