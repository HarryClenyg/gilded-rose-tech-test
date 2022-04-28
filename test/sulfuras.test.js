const Sulfuras = require("../src/sulfuras");
   
describe("Sulfuras", () => {
  it("should never change the quality and sellIn of Sulfuras", () => {
    const item = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80)
    const item2 = new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 25)
    item.updateQuality()
    item2.updateQuality()
    expect(item.quality).toBe(80);
    expect(item.sellIn).toBe(0);
    expect(item2.quality).toBe(25);
    expect(item2.sellIn).toBe(-1);
  });
});
