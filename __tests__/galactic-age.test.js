import { SpaceAge } from "./../src/js/galactic-age";

describe(`SpaceAge()`, () => {
  it(`creates a space age converter converter`, () => {
    const expected = {
      earth: 1,
      mercury: "mercury years",
      venus: "Venus Years",
      mars: "Mars Years",
      jupiter: "Jupiter Years",
      smoker: "Smoker years",
    };
    expect(new SpaceAge()).toEqual(expected);
  });
});
