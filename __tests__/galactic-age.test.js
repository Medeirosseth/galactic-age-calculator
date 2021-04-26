import { SpaceAge } from "./../src/js/galactic-age";

describe("SpaceAge", () => {
  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(30);
  });

  it(`creates a SpaceAge constructor and adds earthAge property`, () => {
    expect(SpaceAge.earthAge).toEqual();
  });

  it(`should correctly determine users age in mercury years from earth age`, () => {
    expect(spaceAge.mercuryAge()).toEqual(125);
  });

  it(`it should corrrectly determine users age in venus years from earthAge`, () => {
    expect(spaceAge.venusAge()).toEqual(48);
  });
});
