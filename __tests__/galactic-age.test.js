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

  it(`should determine how many years a user has live passed their life expectancy on mercury`, () => {
    let spaceageOld = new SpaceAge(100, 79.6);
    expect(spaceageOld.mercuryLifeExpectancy()).toEqual(
      "you surpased your life expectancy by 87"
    );
  });

  it(`should return the amount of years you have left on mercury`, () => {
    let spaceageYoung = new SpaceAge(30, 79.6);
    expect(spaceageYoung.mercuryLifeExpectancy()).toEqual(
      `you have 204 years left on this planet`
    );
  });

  it(`should determine how many years a user has lived passed their life expectancy on venus`, () => {
    let spaceageOld = new SpaceAge(100, 79.6);
    expect(spaceageOld.venusLifeExpectancy()).toEqual(
      "you surpased your life expectancy by 34 years"
    );
  });

  it(`should return the amount of years you have left on venus`, () => {
    let spaceageYoung = new SpaceAge(30, 79.6);
    expect(spaceageYoung.venusLifeExpectancy()).toEqual(
      `you have 79 years left on this planet`
    );
  });

  it(`should determine how many years a user has lived passed their life expectancy on mars`, () => {
    let spaceageOld = new SpaceAge(100, 79.6);
    expect(spaceageOld.marsLifeExpectancy()).toEqual(
      "you surpased your life expectancy by 11 years"
    );
  });

  it(`should return the amount of years you have left on mars`, () => {
    let spaceageYoung = new SpaceAge(30, 79.6);
    expect(spaceageYoung.marsLifeExpectancy()).toEqual(
      `you have 27 years left on this planet`
    );
  });

  it(`should determine how many years a user has lived passed their life expectancy on Jupiter`, () => {
    let spaceageOld = new SpaceAge(100, 79.6);
    expect(spaceageOld.jupiterLifeExpectancy()).toEqual(
      "you surpased your life expectancy by 2 years"
    );
  });

  it(`should return the amount of years you have left on mars`, () => {
    let spaceageYoung = new SpaceAge(30, 79.6);
    expect(spaceageYoung.jupiterLifeExpectancy()).toEqual(
      `you have 4 years left on this planet`
    );
  });
});
