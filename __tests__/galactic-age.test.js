import { SpaceAge } from "./../src/js/galactic-age";

describe("SpaceAge", () => {
  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(30, 79.6);
  });

  it(`creates a SpaceAge constructor and adds earthAge property`, () => {
    expect(SpaceAge.earthAge).toEqual();
  });

  it(`should correctly determine users age in mercury years from earth age`, () => {
    expect(spaceAge.mercuryAge()).toEqual(125);
  });

  it(`should corrrectly determine users age in venus years from earthAge`, () => {
    expect(spaceAge.venusAge()).toEqual(48);
  });

  it(`shoud correctly determine user age in mars years from earthAge`, () => {
    expect(spaceAge.marsAge()).toEqual(15);
  });

  it(`should correctly determine a user age in Jupiter years from earthAge`, () => {
    expect(spaceAge.jupiterAge()).toEqual(2);
  });

  it(`should determine how many years a user has live passed  on mercury`, () => {
    let spaceageOld = new SpaceAge(100, 79.6);
    expect(spaceageOld.mercuryLifeExpectancy()).toEqual(
      "you surpased your life expectancy by 87"
    );
  });

  it(`should return the amount have years you have left on mercury`, () => {
    let spaceageYoung = new SpaceAge(30, 79.6);
    expect(spaceageYoung.mercuryLifeExpectancy()).toEqual(
      `you have 204 on this planet`
    );
  });
});
