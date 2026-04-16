
export class Allergies {
  constructor(allergies) {
    this.allergies = allergies
    this.allergens = ['eggs' , 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']
  }

  list() {
    return this.allergens.filter( allergen => this.allergicTo(allergen))
  }

  allergicTo(allergen) {
      const index = this.allergens.indexOf(allergen)
      if( index < 0 ) throw new Error('This is not an allergen')
      const value = 1 << index;
      return (this.allergies & value) !== 0 
  }
}
