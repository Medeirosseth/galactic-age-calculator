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

  venusLifeExpectancy() {
    let venusLifeExpectancy = Math.floor(79 / 0.62);
    let timeLeft = venusLifeExpectancy - this.mercuryAge();
    if (timeLeft < 0) {
      let lifeExpectancy = timeLeft * -1;
      return `you surpased your life expectancy by ${lifeExpectancy} years`;
    } else {
      return `you have ${timeLeft} on this planet`;
    }
  }
}
