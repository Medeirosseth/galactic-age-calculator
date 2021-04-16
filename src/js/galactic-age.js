export class SpaceAge {
  constructor(
    name,
    earth,
    mercury,
    venus,
    mars,
    jupiter,
    aveLifeExpectancy,
    smoker
  ) {
    this.name = name;
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.aveLifeExpectancy = aveLifeExpectancy;
    this.smoker = smoker;
  }
}
/// user opens website
/// inputs name and earth age
/// returns name and earth age along with converted planet years
/// template literals would be a good way about returning each year
/// create an age input that breaks down age to days * 365(in a year)
/// a mercury year is 88 earth days
/// a venus year is 224.7 earth days
/// a mars year is is 687 earth days
/// a jupiter year is 4,332.59 earth days
/// a smoker on average lives 10 fewer years
/// A class that takes a persons age in human years and calculates their
/// age depending on a corrosponding planet
/// mercury is .24 Earth years
/// venus is .62 Earth years
/// mars is .1.88 Earth years
/// jupiter is 11.86 Earth years
/// user inputs whether or not they are a smoker, smokers life expectancy is 10 years short than a non smoker
