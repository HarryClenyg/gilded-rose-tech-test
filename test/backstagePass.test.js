const BackstagePass = require("../src/backstagePass");

describe("Backstage Pass", () => {
  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    const item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    item.updateQuality()
    expect(item.sellIn).toBe(14);
  });

  it("should increase quality of Backstage Passes by 1 each day when more than 10 days to event", () => {
    const item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    item.updateQuality()
    expect(item.quality).toBe(21);
  });

  it("should increase quality of Backstage Passes by 2 each day when there are between 6 and 10 days (inclusive) to event", () => {
    const item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 20)
    item.updateQuality()
    expect(item.quality).toBe(22);
  });

  it("should increase quality of Backstage Passes by 3 each day when there are between 0 and 5 days (inclusive) to event", () => {
    const item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 20)
    item.updateQuality()
    expect(item.quality).toBe(23);
  });

  it("should set quality to 0 once event has passed", () => {
    const item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20)
    item.updateQuality()
    expect(item.quality).toBe(0);
  });
});
