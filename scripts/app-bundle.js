define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Kaks nuga';
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Aurelia';
      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'people', name: 'people', moduleId: 'people', nav: true }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('people',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var people = exports.people = function people() {
    _classCallCheck(this, people);

    this.appName = 'Aurelia projekt';
    this.count = 10;
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n  <h1>${message}</h1>\n</template>\n"; });
define('text!people.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n  <h1>Hei! ${appName} kasutajaid on hetkel ${count}</h1>\n  <title>SOULmate</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <style>\n    /* Remove the navbar's default margin-bottom and rounded borders */\n    .navbar {\n      margin-bottom: 0;\n      border-radius: 0;\n    }\n\n    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height: 450px}\n\n    /* Set gray background color and 100% height */\n    .sidenav {\n      padding-top: 20px;\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n\n    /* Set black background color, white text and some padding */\n    footer {\n      background-color: #555;\n      color: white;\n      padding: 15px;\n    }\n\n    /* On small screens, set height to 'auto' for sidenav and grid */\n    @media screen and (max-width: 767px) {\n      .sidenav {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content {height:auto;}\n    }\n  </style>\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Logo</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid text-center\">\n    <div class=\"row content\">\n      <div class=\"col-sm-2 sidenav\">\n        <p><a href=\"#\">Kasutaja</a></p>\n        <img class=\"img-thumbnail\" src=\"../../pictures/emptyuser.png\" width=\"100\">\n        <p>Enesekirjeldus</p>\n      </div>\n      <div class=\"col-sm-8 text-center\">\n        <h1>Pildinimi</h1>\n        <div class=\"text-center\"><img class=\"img-thumbnail\" src=\"../../pictures/cat.jpg\" width=\"343,2\"/></div>\n        <button type=\"button\" class=\"btn btn-success\">LIKE</button>\n        <button type=\"button\" class=\"btn btn-danger\">HATE</button>\n      </div>\n      <div class=\"col-sm-2 sidenav\">\n        <div class=\"content\">\n          <a href=\"#\">Matches</a>\n        </div>\n        <div class=\"well\">\n          <p>MATCH1</p>\n        </div>\n        <div class=\"well\">\n          <p>MATCH2</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <footer class=\"container-fluid text-center\">\n    <p>Footer Text</p>\n  </footer>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map