import { SpaceAge } from "./../src/js/galactic-age";

describe("SpaceAge", () => {
  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(30);
  });

  it(`creates a SpaceAge constructor and adds earthAge property`, () => {
    expect(SpaceAge.earthAge).toEqual();
  });
});
