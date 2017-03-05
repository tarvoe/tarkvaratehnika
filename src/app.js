export class App {
  constructor() {
    this.message = 'Kaks nuga';
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
      { route: 'people',   name: 'people',      moduleId: 'people',   nav: true }
    ]);
  }
}
