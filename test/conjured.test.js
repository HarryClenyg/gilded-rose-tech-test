const Conjured = require("../src/conjured");
    
describe("Conjured items", () => {
  it("should reduce quality by 2 each time updateQuality is called (as if the end of the day)", () => {
    const item = new Conjured("Conjured Mana Cake", 3, 6)
    item.updateQuality()
    expect(item.quality).toBe(4);
  });
  
  it("should not let quality drop below 0", () => {
    const item = new Conjured("Conjured Mana Cake", 3, 0)
    item.updateQuality()
    expect(item.quality).toBe(0);
  });
  
  it("should decrease quality by 4 for items past their sellIn date", () => {
    const item = new Conjured("Conjured Mana Cake", -1, 6)
    item.updateQuality()
    expect(item.quality).toBe(2);
  });
  
  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    const item = new Conjured("Conjured Mana Cake", 3, 6)
    item.updateQuality()
    expect(item.sellIn).toBe(2);
  });
});
