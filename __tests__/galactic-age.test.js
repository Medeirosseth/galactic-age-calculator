import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge`, () => {
  it("creates a SpaceAge constructor object", () => {
    const spaceAge = new SpaceAge("buzz", 30, 78);
    const expected = {
      name: `buzz`,
      earth: 30,
      aveLifeExpectancy: 78,
    };
    expect(spaceAge).toEqual(expected);
  });
  beforeEach(() => {
    const spaceAge = new SpaceAge("buzz", 1);
  });

  it(`should correctly convert 1 earthAge to 365 earthDays`, () => {
    expect(spaceAge.earth).toEqual(365);
  });
});
