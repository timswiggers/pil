import {Router} from 'aurelia-router';

export class App {

  static inject(){
    return [Router];
  };

  constructor(router){
    this.router = router;
    this.router.configure(config => {
      config.title = 'PIL';
      config.map([
        { route: '', moduleId: 'home'},
        { route: 'pil', moduleId: 'pil/pil-label'},
        { route: 'asl', moduleId: 'asl/asl-label'},
        { route: 'products', moduleId: 'products/products-list'},
      ]);
    });
  }
}
