import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge`, () => {
  it("creates a SpaceAge constructor object", () => {
    const spaceAge = new SpaceAge("buzz", 1, 88);
    const expected = {
      name: `buzz`,
      earth: 1,
      mercury: 88,
    };
    expect(spaceAge).toEqual(expected);
  });

  it(`should correctly convert 1 earthAge to 365 earthDays`, () => {
    const spaceAge = new SpaceAge("buzz", 1);
    const expected = spaceAge.earth * 365;
    expect(365).toEqual(expected);
  });

  it(" should divide a mercury year (88 days) into earth days (365) 365/88 = 4.147", () => {
    const spaceAge = new SpaceAge("buzz", 1, 88);
    const expected = spaceAge.mercury / spaceAge.earth;
    expect(4).toEqual(expected);
  });
});
