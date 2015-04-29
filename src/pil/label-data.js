export class LabelData {
  constructor() {
    this.amount = 1;
    this.cleaningWays = [
      new CleaningWay("Air"),
      new CleaningWay("Steam"),
      new CleaningWay("Water"),
      new CleaningWay("Nitrogen")
    ];
  }
}

class CleaningWay {

  constructor(name, selected) {
    this.name = name;
    this.selected = selected || false;
  }

}
