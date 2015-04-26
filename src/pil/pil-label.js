import {LabelData} from './label-info';

export class PILLabel {

  constructor() {
    this.label = new LabelData();
  }

  get canSelectProduct() {
    return this.label.productionUnit;
  }

  get canSelectSecondaryProduct() {
    return this.canSelectProduct && this.label.product;
  }

  print() {

  }

  get canPrint() {
    let validProduct = this.label.productionUnit && this.label.product && this.label.secondaryProduct;
    let cleaningWaysLength = this.label.cleaningWays.filter(w => w.selected === true).length;
    let validCleaningWays = (cleaningWaysLength > 0 && cleaningWaysLength <= 2);

    return validProduct && validCleaningWays;
  }

  clear() {
    this.label.productionUnit = "";
    this.label.product = "";
    this.label.secondaryProduct = "";

    this.label.cleaningWays.forEach(w => w.selected = false);
  }
}
