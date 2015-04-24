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
          { route: '', moduleId: 'home'}
      ]);
    });
  }
}
