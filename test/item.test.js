const Item = require("../src/item");

describe("Normal Items", () => {
  it("should reduce quality by 1 each time updateQuality is called (as if the end of the day)", () => {
    const item = new Item("+5 Dexterity Vest", 10, 20)
    item.updateQuality()
    expect(item.quality).toBe(19);
  });

  it("should not let quality drop below 0", () => {
    const item = new Item("+5 Dexterity Vest", 10, 0)
    item.updateQuality()
    expect(item.quality).toBe(0);
  });

  it("should decrease quality by 2 for items past their sellIn date", () => {
    const item = new Item("Elixir of the Mongoose", -1, 7)
    item.updateQuality()
    expect(item.quality).toBe(5);
  });

  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    const item = new Item("+5 Dexterity Vest", 10, 20)
    item.updateQuality()
    expect(item.sellIn).toBe(9);
  });
});
