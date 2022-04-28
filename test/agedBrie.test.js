const AgedBrie = require("../src/agedBrie");

describe("Aged Brie", () => {
  it("should increase quality of aged brie each day", () => {
    const item = new AgedBrie("Aged Brie", 2, 0);
    item.updateQuality()
    expect(item.quality).toBe(1);
  });

  it("should cap the quality of an aged brie at 50", () => {
    const item = new AgedBrie("Aged Brie", 2, 50);
    item.updateQuality()
    expect(item.quality).toBe(50);
  });
});
