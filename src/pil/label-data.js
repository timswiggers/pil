export class LabelData {
  constructor(){
    this.cleaningWays = [
      new CleaningWay("Air"),
      new CleaningWay("Steam"),
      new CleaningWay("Water")
    ];
  }
}

class CleaningWay {

  constructor(name, selected) {
    this.name = name;
    this.selected = selected || false;
  }

}
