const Shop = require("../src/gilded_rose");
const BackstagePass = require("../src/backstagePass");

describe("Backstage Pass", () => {
  const gildedRose = new Shop();
  const items = gildedRose.items;
  items.push(
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20)
  );
  
  const updateItems = gildedRose.updateQualityAll();

  it("should add new item to shop's item list", () => {
    expect(updateItems[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
  });

  it("should reduce sellIn by 1 each time updateQuality is called (as if the end of the day)", () => {
    expect(updateItems[0].sellIn).toBe(14);
  });

  it("should increase quality of Backstage Passes by 1 each day when more than 10 days to event", () => {
    expect(updateItems[0].quality).toBe(21);
  });

  it("should increase quality of Backstage Passes by 2 each day when there are between 6 and 10 days (inclusive) to event", () => {
    expect(updateItems[1].quality).toBe(22);
  });

  it("should increase quality of Backstage Passes by 3 each day when there are between 0 and 5 days (inclusive) to event", () => {
    expect(updateItems[2].quality).toBe(23);
  });

  it("should set quality to 0 once event has passed", () => {
    expect(updateItems[3].quality).toBe(0);
  });
});
