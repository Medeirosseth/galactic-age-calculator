import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge`, () => {
  it("creates a SpaceAge constructor object", () => {
    const spaceAge = new SpaceAge("buzz", 30);
    const expected = {
      name: `buzz`,
      earth: 30,
    };
    expect(spaceAge).toEqual(expected);
  });
  beforeEach(() => {
    const spaceAge = new SpaceAge("buzz", 1);
  });

  it(`should correctly convert 1 earthAge to 365 earthDays`, () => {
    const spaceAge = new SpaceAge("buzz", 1);
    const earthDays = spaceAge.earth * 365;
    expect(earthDays.earth).toEqual(365);
  });
});
