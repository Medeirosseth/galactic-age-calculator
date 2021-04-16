import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge`, () => {
  it("creates a SpaceAge constructor object", () => {
    const spaceAge = new SpaceAge("buzz", 30, 15, 7, 5, 2, -10);
    const expected = {
      name: `buzz`,
      earth: 30,
      mercury: 15,
      venus: 7,
      mars: 5,
      jupiter: 2,
      smoker: -10,
    };
    expect(spaceAge).toEqual(expected);
  });
});
