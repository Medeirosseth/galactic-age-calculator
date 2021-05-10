export class SpaceAge {
  constructor(earthAge, portlandLifeExpectancy) {
    this.earthAge = earthAge;
    this.portlandLifeExpectancy = portlandLifeExpectancy;
  }

  mercuryAge() {
    let mercuryAge = Math.floor(this.earthAge / 0.24);
    return mercuryAge;
  }

  venusAge() {
    let venusAge = Math.floor(this.earthAge / 0.62);
    return venusAge;
  }

  marsAge() {
    let marsAge = Math.floor(this.earthAge / 1.88);
    return marsAge;
  }

  jupiterAge() {
    let jupiterAge = Math.floor(this.earthAge / 11.86);
    return jupiterAge;
  }

  mercuryLifeExpectancy() {
    let mercuryLifeExpectancy = Math.floor(79 / 0.24);
    let timeLeft = mercuryLifeExpectancy - this.mercuryAge();
    if (timeLeft < 0) {
      let lifeExpectancy = timeLeft * -1;
      return `you surpased your life expectancy by ${lifeExpectancy}`;
    } else {
      return `you have ${timeLeft} on this planet`;
    }
  }

  venusLifeExpectancy() {}
}

/// user opens website
/// inputs name and earth age
/// returns name and earth age along with converted planet years
/// template literals would be a good way about returning each year
/// a mercury year is 88 earth days
/// a venus year is 224.7 earth days
/// a mars year is 687 earth days
/// a jupiter year is 4,332.59 earth days
/// a smoker on average lives 10 fewer years
/// the average life expectancy of the United States is 78.54 years
/// further exploration canada life expectancy 81.95 years
/// further exploration United Kingdom life expectanct 81.26
/// A class that takes a persons age in human years and calculates their
/// age depending on a corrosponding planet
/// mercury is .24 Earth years
/// venus is .62 Earth years
/// mars is .1.88 Earth years
/// jupiter is 11.86 Earth years
/// user inputs whether or not they are a smoker, smokers life expectancy is 10 years short than a non smoker
