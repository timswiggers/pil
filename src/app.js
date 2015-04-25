import {Router} from 'aurelia-router';

export class App {

  static inject() {
    return [Router];
  };

  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Product Information Label';
      config.map([
        { route: '', redirect: 'pil' },
        { route: 'pil', moduleId: 'pil/pil-label', title: 'PIL', nav: true },
        { route: 'asl', moduleId: 'asl/asl-label', title: 'ASL', nav: true },
        { route: 'products', moduleId: 'products/products-list', title: 'Products', nav: true },
      ]);
    });

    this.router.navigate('pil');
  }
}
