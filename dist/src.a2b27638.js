// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"muduls/func_const.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choseEmoji = choseEmoji;
exports.$$$ = exports.$$ = exports.$ = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param s stands for 'selector'
 * @param p stands for 'parent' container. defaults to 'document'
 */
var $ = function $(s) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.querySelector(s);
};

exports.$ = $;

var $$ = function $$(c) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.createElement(c);
};

exports.$$ = $$;

var $$$ = function $$$(s) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.querySelectorAll(s);
};

exports.$$$ = $$$;
var emoji = ["🦁", "🐶", "🐱", "🐺", "🦓", "🐰", "🐻", "🐸", "🐳", "🐢", "🐔", "🤩", "🥦", "🍬", "🚀", "🍒", "🍕", "🍫", "🎉", "🎈", "🍇", "🍔", "🌶", "🍤", "🍱", "🥧", "🍦", "🍭", "🍼", "🍺", "🎱", "⚽", "🏆"];

var randomizer = function randomizer(min, max) {
  return min + Math.round(Math.random() * max - min);
};

function arrayMix(arr) {
  for (var item in arr) {
    var temp = arr[item];
    var index = randomizer(0, arr.length - 1);
    arr[item] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

function choseEmoji(num) {
  var temp = [];
  var index = [];

  while (index.length < num) {
    var random = randomizer(0, emoji.length - 1);

    if (!index.includes(random)) {
      temp.push(emoji[random]);
      index.push(random);
    }
  }

  temp = [].concat(_toConsumableArray(temp), _toConsumableArray(temp));
  return arrayMix(temp);
}
},{}],"node_modules/@ajar/marker/src/constants.js":[function(require,module,exports) {
//Modifiers
exports.Reset = '\x1b[0m'
exports.Bold = '\x1b[1m'
exports.Dim = '\x1b[2m'
exports.Underscore = '\x1b[4m'
exports.Blink = '\x1b[5m' 
exports.Reverse = '\x1b[7m'
exports.Hidden = '\x1b[8m'
//Colors
exports.NoColor = '\x1b[N'
exports.Black = '\x1b[30m'
exports.Red = '\x1b[31m'
exports.Green = '\x1b[32m'
exports.Yellow = '\x1b[33m'
exports.Blue = '\x1b[34m'
exports.Magenta = '\x1b[35m'
exports.Cyan = '\x1b[36m'
exports.White = '\x1b[37m'
//Backgrounds
exports.BgBlack = '\x1b[40m'
exports.BgRed = '\x1b[41m'
exports.BgGreen = '\x1b[42m'
exports.BgYellow = '\x1b[43m'
exports.BgBlue = '\x1b[44m'
exports.BgMagenta = '\x1b[45m'
exports.BgCyan = '\x1b[46m'
exports.BgWhite = '\x1b[47m'
},{}],"node_modules/@ajar/marker/src/index.js":[function(require,module,exports) {
/**
 * @author Ajar <yariv.gilad@gmail.com> [https://timetocode.io, https://casaversa.com]
 * */
const constants = require('./constants');
const {
    Hidden,
    Reset,
    Bold,
    NoColor,
    Red,
    Green,
    Blue,
    Yellow,
    Magenta,
    Cyan,
    BgCyan,
    White,
    Black
} = constants;

let max_chars = 45;

/**
 * @returns { string } - filename of the script using the logger
 */
function get_filename(){
    try {
        throw new Error();
    } catch (e) {
        const lines = e.stack.split('\n');
        let line = lines[4];
        if(!line || 
            (line && line.includes('internal/modules/cjs')) || 
            (line.includes('<anonymous>')) ||
            (line.includes('_stream_writable.js')) ||
            (line.includes('next_tick.js')) ||
            (line.includes('node_modules')) ||
            (line && line.includes('events.js'))) line = lines[3];
        if(!line) return '>>';
        const res = line.match(/([\w\d\-_.]*:\d+:\d+)/);
        if(!res) return '>>';
        const [info] = res;
        const [file , line_num] = info.split(':');
         return `${file}${Cyan} > ${White}${line_num}`
    }
}
function is_server() {
    return !(typeof window != 'undefined' && window.document && this == window);
}
/**
 * @param {string} color - one of the color hex constant values
 * @returns { Function } - args will be colored by the color you passed in.
 */
const log = (color,file_name) => (...args)=>  { 
    const hide = args[0] === Hidden || args.length === 0;
    const colored_msg = hide ? args.splice(0,2)[1] : args.shift() ;
    const user_text = [`${Bold}${color}${colored_msg}${Reset}`, ...args].join(' ');
    if(user_text.length > max_chars) max_chars = user_text.length;
    const pad = ' '.repeat(max_chars - user_text.length);
    const stamp = `${Magenta}🖍  ${White}${file_name||get_filename()} ${Reset}` 
    const text = `${user_text} ${pad} ${stamp}`;
    if(!hide){
        console.log(text);
    }
    return text;
}

const marker = {
    //by levels shorthand
    n :         log( NoColor ),    
    v :         log( Magenta ),    
    d :         log( Cyan ),       
    i :         log( Green ),      
    w :         log( Yellow ),     
    e :         log( Red ),       
    //by explicit levels  
    none:       log( NoColor ),    
    verbose:    log( Magenta ),    
    debug:      log( Cyan ),       
    info:       log( Green ),      
    warn:       log( Yellow ),     
    err:        log( Red ),       
    //by color names
    red:        log( Red ),       
    green:      log( Green ),     
    blue:       log( Blue ),      
    cyan:       log( Cyan ),      
    yellow:     log( Yellow ),  
    magenta:    log( Magenta ),   
    
    //some extras
    /**
     * @param { Object } obj - the Object to log 
     * @param { string } label - optional label 
     */
    obj:   (obj,label='object:')=> {

            if(Object(obj) !== obj){//verify value is an object
                throw new Error('.obj() expects at least 1 object argument');
            }
            const file_name = get_filename();
            const actual_label = log(Magenta,file_name)(label);
            console.dir(obj);
            return {actual_label}
    },
    /**
     * @param { Error } err - an Error object to log
     */
    error: (err)=> {
            if(toString.call(err) !== '[object Error]'){
                throw new Error('.error() expects 1 Error argument');
            }
            const file_name = get_filename();
            const msg = log(Red,file_name)('ERROR: ',err.message);
            let odd = true;
            let stack = err.stack? err.stack.split('\n') : [];
            //exclude stack traces from node internals or node_modules
            stack = stack.filter(line=> !line.includes('node_modules/') &&
                                        !line.includes('internal/modules/cjs') &&
                                        !line.includes('internal/bootstrap'));
            for(let line of stack){
                odd = !odd
                //keep it short
                line = line.substr(line.lastIndexOf('\\') - 35);
                //alternating row colors
                odd? log(NoColor,file_name)(line)  : log(Blue,file_name)(line) 
            }
            return {msg,stack}
    },
    constants   
}
module.exports = marker;
},{"./constants":"node_modules/@ajar/marker/src/constants.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _func_const = require("../muduls/func_const");

var _marker = _interopRequireDefault(require("@ajar/marker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardNum = 12;
var wrapper = (0, _func_const.$)('.wrapper');
var temp = (0, _func_const.choseEmoji)(cardNum / 2);
var prev_card = -1;
var flag = false;

function cardCreator() {
  wrapper.innerHTML = "";

  _marker.default.red("in card creator");

  for (var i = 0; i < cardNum; i++) {
    _marker.default.cyan("in card creator loop");

    var card = (0, _func_const.$$)("div");
    card.className = "card";
    card.innerHTML = "\n        <div class=\"card__face card__face--front\">".concat(temp[i], "</div>\n        <div class=\"card__face card__face--back\"></div>");
    card.id = i;
    card.style.margin = '3px';
    wrapper.appendChild(card);
    console.log("wrapper in card creator " + wrapper.innerHTML);
  }
}

function gameWon() {
  wrapper.removeEventListener("click", gameWon);
  var div = (0, _func_const.$$)("div");
  div.className = "game-won";
  div.innerHTML = "<p>YOU WON!!!!</p> <button class = 'again'> Press to play again </button> <button class = 'not-again'> Press to Quit </button>";
  wrapper.innerHTML = "";
  wrapper.appendChild(div);
  var button = (0, _func_const.$$$)("button");
  console.log(button);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var b = _step.value;
      b.addEventListener("click", function () {
        console.log(b);

        if (b.className == "again") {
          console.log("button class again");
          wrapper.innerHTML = "";
          console.log("wrapper " + wrapper);
          cardNum = 12;
          console.log(cardNum);
          temp = (0, _func_const.choseEmoji)(cardNum / 2);
          console.log("temp:  " + temp);
          init();
        } else {
          window.location.replace("http://www.google.com");
        }
      });
    };

    for (var _iterator = button[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function cardClicked(event) {
  if (!event.currentTarget.classList.contains("is-true")) {
    _marker.default.red("in first if");

    if (prev_card == -1 && flag == false) {
      prev_card = event.currentTarget;
      event.currentTarget.classList.toggle("is-flipped");

      _marker.default.yellow("temo is empty " + prev_card);
    } else if (prev_card.textContent == event.currentTarget.textContent && flag == false && prev_card.id !== event.currentTarget.id) {
      event.currentTarget.classList.add("is-true");
      prev_card.classList.add("is-true");
      event.currentTarget.classList.toggle("is-flipped");

      _marker.default.cyan("temo is not empty " + prev_card);

      prev_card = -1;
      cardNum = cardNum - 2;
    } else if (prev_card.textContent != event.currentTarget.textContent && flag == false && prev_card.id !== event.currentTarget.id) {
      event.currentTarget.classList.toggle("is-flipped");

      _marker.default.cyan("final else " + prev_card);

      var current_card = event.currentTarget;
      flag = true;
      setTimeout(function () {
        prev_card.classList.toggle("is-flipped");
        current_card.classList.toggle("is-flipped");
        prev_card = -1;
        flag = false;
      }, 1000);
    } else if (flag == true) {
      setTimeout(function () {
        flag = false;
      }, 1000);
    }

    if (cardNum <= 0) {
      var cards = (0, _func_const.$$$)(".card");
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var card = _step2.value;
          card.classList.add("is-won");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      setTimeout(function () {
        return wrapper.addEventListener("click", gameWon);
      }, 2000);
    }
  }
}

function flipCards(cards) {
  var i = 1000;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop2 = function _loop2() {
      var card = _step3.value;
      i += 200;
      setTimeout(function () {
        card.classList.toggle("is-flipped");
      }, i);
    };

    for (var _iterator3 = cards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function init() {
  cardCreator();
  var cards = (0, _func_const.$$$)(".card");
  flipCards(cards);
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = cards[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var card = _step4.value;
      card.addEventListener("click", cardClicked); // console.log(cardNum);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

init();
},{"../muduls/func_const":"muduls/func_const.js","@ajar/marker":"node_modules/@ajar/marker/src/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52101" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map