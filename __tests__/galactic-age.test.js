import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge`, () => {
  it("creates a SpaceAge constructor object", () => {
    const spaceAge = new SpaceAge("buzz", 30, 78, 15, 7, 5, 2, -10);
    const expected = {
      name: `buzz`,
      earthAge: 1,
      mercury: 15,
      venus: 7,
      mars: 5,
      jupiter: 2,
      smoker: -10,
    };
    expect(spaceAge).toEqual(expected);
  });

  it("should convert earthAge into earthDays ", () => {
    earthDays();
    {
      const earthDays = this.earthAge * 365;
      expect(earthDays(1)).toEqual(365);
    }
  });
});
