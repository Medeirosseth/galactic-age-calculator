import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge`, () => {
  it("creates a SpaceAge constructor object", () => {
    const spaceAge = new SpaceAge("buzz", 1);
    const expected = {
      name: `buzz`,
      earth: 1,
    };
    expect(spaceAge).toEqual(expected);
  });

  it(`should correctly convert 1 earthAge to 365 earthDays`, () => {
    const spaceAge = new SpaceAge("buzz", 1);
    const expected = spaceAge.earth * 365;
    expect(spaceAge.earth).toEqual(expected);
  });
});
