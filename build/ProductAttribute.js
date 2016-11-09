(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.immutable);
    global.ProductAttribute = mod.exports;
  }
})(this, function (exports, _Link, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Link2 = _interopRequireDefault(_Link);

  var _immutable2 = _interopRequireDefault(_immutable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ProductAttributeRecord = new _immutable.Record({
    namespace: '',
    name: '',
    type: 'STRING',
    locale: 'en_US',
    value: '',
    _links: new _immutable.Map()
  });

  var ProductAttribute = function (_ProductAttributeReco) {
    _inherits(ProductAttribute, _ProductAttributeReco);

    function ProductAttribute() {
      var productAttribute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ProductAttribute);

      var immutable = _immutable2.default.fromJS(productAttribute);
      var parsed = immutable.update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (ProductAttribute.__proto__ || Object.getPrototypeOf(ProductAttribute)).call(this, parsed));
    }

    _createClass(ProductAttribute, [{
      key: 'fullName',
      get: function get() {
        return this.namespace + ':' + this.name;
      }
    }]);

    return ProductAttribute;
  }(ProductAttributeRecord);

  exports.default = ProductAttribute;
});