export class Breed {
  id: number;
  breed_key: string;
  breed: string;
  best_skill: string;
  // minHeight: number;
  // maxHeight: number;
  // minWeight: number;
  // maxWeight: number;

  constructor(id: number, breed_key: string, breed: string, best_skill: string) {
    //, minHeight: number, maxHeight: number, minWeight: number, maxWeight: number
    this.id = id;
    this.breed_key = breed_key;
    this.breed = breed;
    this.best_skill = best_skill;
    // this.minHeight = minHeight;
    // this.maxHeight = maxHeight;
    // this.minWeight = minWeight;
    // this.maxWeight = maxWeight;
  }
}
