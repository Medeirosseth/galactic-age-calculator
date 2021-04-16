import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge()`, () => {
  it(`creates a space age converter converter`, () => {
    const age = new SpaceAge("buzz", 30, 15, 3, 10, 6, 3, -5);
    const expected = {
      name: "buzz",
      earth: 30,
      mercury: 15,
      venus: 3,
      mars: 10,
      jupiter: 6,
      smoker: -5,
    };
    expect(new SpaceAge()).toEqual(expected);
  });
});
