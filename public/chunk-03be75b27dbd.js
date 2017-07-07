webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Point {
    constructor(point) {
        this.x = point.x;
        this.y = point.y;
    }

    is(point) {
        return this.x === point.x && this.y === point.y;
    }

    distanceOf(point) {
        return Math.abs(this.x - point.x) + Math.abs(this.y - point.y);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-253c4082\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
			var newContent = require("!!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-253c4082\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Index_area_2HM9pV{width:142px;height:142px;background:#f7f7f7;margin:0 auto;border:1px solid #eee}.Index_area_2HM9pV[status=failed]{border-color:#d22f25}.Index_foot_2weXGV{text-align:center;margin:40px auto}.Index_point_ZfMKf5{float:left;width:12px;height:12px;margin:1px;background:#fff;border-radius:2px}.Index_point_ZfMKf5[role=body]{background:#666}.Index_point_ZfMKf5[role=head]{background:#222}.Index_point_ZfMKf5[role=food]{background:#d22f25;border-radius:100%}", ""]);

// exports
exports.locals = {
	"area": "Index_area_2HM9pV",
	"foot": "Index_foot_2weXGV",
	"point": "Index_point_ZfMKf5"
};

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SnakeGame_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SnakeGame_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SnakeGame_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        [__WEBPACK_IMPORTED_MODULE_0__SnakeGame_vue___default.a.name]: __WEBPACK_IMPORTED_MODULE_0__SnakeGame_vue___default.a,
    },
});


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var cssModules = {}
function injectStyle (ssrContext) {

              var oldLocals = this['$style'];
              var newLocals = __webpack_require__(192);
              if (oldLocals && oldLocals.root === 'SnakeGame.vue')
                  newLocals = Object.assign({}, oldLocals, newLocals);
              cssModules['$style'] = newLocals;
            this['$style'] = cssModules['$style']
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(197),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-803995fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./SnakeGame.vue", function() {
			var newContent = require("!!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-css-loader/index.js?{\"minimize\":true,\"localIdentName\":\"[name]_[local]\",\"modules\":true,\"importLoaders\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-803995fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/import-global-loader/index.js!../../../../Projects/GitHub/Vusion/vusion-cli/node_modules/vusion-vue-loader/lib/selector.js?type=styles&index=0!./SnakeGame.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".SnakeGame_area_2seC9Y{background:#f7f7f7;margin:0 auto;border:1px solid #eee}.SnakeGame_area_2seC9Y[status=failed]{border-color:#d22f25}.SnakeGame_area_2seC9Y[status=success]{border-color:#41b883}.SnakeGame_foot_2DA1xj{text-align:center;margin:0 auto}.SnakeGame_point_1PX796{float:left;width:12px;height:12px;margin:1px;background:#fff;border-radius:2px}.SnakeGame_point_1PX796[role=body]{background:#41b883}.SnakeGame_point_1PX796[role=head]{background:#35495e}.SnakeGame_point_1PX796[path]{-webkit-box-shadow:inset 0 0 10px 10px rgba(0,0,0,.15);box-shadow:inset 0 0 10px 10px rgba(0,0,0,.15)}.SnakeGame_point_1PX796[role=food]{background:#e96900;border-radius:100%;-webkit-box-shadow:none;box-shadow:none}", ""]);

// exports
exports.locals = {
	"root": "SnakeGame_3Udrnj",
	"area": "SnakeGame_area_2seC9Y",
	"foot": "SnakeGame_foot_2DA1xj",
	"point": "SnakeGame_point_1PX796"
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LinkedPoint__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Snake__ = __webpack_require__(196);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const KEY_CODES = ['left', 'up', 'right', 'down'];
const KEY_ENUM = {
    left: 0,
    up: 1,
    right: 2,
    down: 3,
};
const KEY_PRINT = ['←', '↑', '→', '↓'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'u-snake-game',
    props: {
        width: { type: Number, default: 12 },
        height: { type: Number, default: 12 },
        body: { type: Array, default() {
            return [{ x: this.width / 2, y: this.height / 2 }];
        } },
        initialFood: { type: Array, default() {
            return [];
        } },
        foodCount: { type: Number, default: Infinity },
        manual: { type: Boolean, default: false },
        debug: { type: Boolean, default: false },
        nobrain: { type: Boolean, default: false },
        interval: { type: Number, default: 10 },
    },
    data() {
        const data = {
            pointMetrix: [],
            food: undefined,
            foodLeft: 0,
            snake: undefined,
            status: '',
            playing: false,
            stepCount: 0,
            pathThought: [],
        };

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++)
                data.pointMetrix.push(new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */]({ x, y }));
        }

        return data;
    },
    computed: {
        areaWidth() { return 14 * this.width + 2; },
        areaHeight() { return 14 * this.height + 2; },
    },
    created() {
        this.reset();
    },
    methods: {
        reset() {
            this.snake = new __WEBPACK_IMPORTED_MODULE_2__Snake__["a" /* default */]({
                direction: 0,
                body: this.body.map((point) => new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](point)),
            });

            this.initialFood_ = this.initialFood.map((point) => new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](point));

            Object.assign(this, {
                food: this.getFood(),
                foodLeft: this.foodCount,
                status: '',
                playing: false,
                stepCount: 0,
                pathThought: [],
            });

            !this.manual && this.think();
        },
        /**
         * @method feed()
         * @description 随机喂食物
        */
        getFood() {
            if (this.initialFood_.length)
                return this.initialFood_.shift();

            let index = Math.random() * (this.pointMetrix.length - this.snake.length) >> 0;
            for (let i = 0; i < this.pointMetrix.length; i++) {
                const point = this.pointMetrix[i];
                if (this.snake.isInBody(point))
                    continue;
                if (!index)
                    return this.food = point;
                index--;
            }
        },
        getRole(point) {
            if (this.food && this.food.is(point))
                return 'food';
            else if (this.snake.isHead(point))
                return 'head';
            else if (this.snake.isInBody(point))
                return 'body';
        },
        isInPathThought(point) {
            return this.pathThought.some((point2) => point2.is(point));
        },
        getAndCheckNext(current, direction, target) {
            const next = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](current);
            if (direction === KEY_ENUM.left)
                next.x--;
            else if (direction === KEY_ENUM.right)
                next.x++;
            else if (direction === KEY_ENUM.up)
                next.y--;
            else if (direction === KEY_ENUM.down)
                next.y++;

            if (target && next.is(target))
                return next;
            if (next.x < 0 || next.x >= this.width || next.y < 0 || next.y >= this.height)
                return false;
            if (this.snake.isInBody(next))
                return false;

            return next;
        },
        getAndCheckNext2(current, direction, target) {
            const next = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](current);
            if (direction === KEY_ENUM.left)
                next.x--;
            else if (direction === KEY_ENUM.right)
                next.x++;
            else if (direction === KEY_ENUM.up)
                next.y--;
            else if (direction === KEY_ENUM.down)
                next.y++;

            if (target && next.is(target))
                return next;
            if (next.x < 0 || next.x >= this.width || next.y < 0 || next.y >= this.height)
                return false;

            const body = this.getDynamicBody(current);
            if (body.some((point) => next.is(point)))
                return false;

            return next;
        },
        getDynamicBody(point, eat) {
            const body = [];
            while (point && point.prev) {
                body.push(point);
                point = point.prev;
            }
            return body.concat(this.snake.body).slice(0, eat ? this.snake.length + 1 : this.snake.length);
        },
        step() {
            const next = this.getAndCheckNext(this.snake.head, this.snake.direction);
            if (!next) {
                this.status = 'failed';
                this.playing = false;

                return false;
            } else {
                this.snake.unshift(next);
                if (this.food.is(next)) {
                    this.foodLeft--;

                    if (this.snake.length === this.width * this.height) {
                        this.food = undefined;
                        this.status = 'success';
                        this.playing = false;
                        return;
                    }

                    this.food = this.getFood();
                    if (!this.foodLeft) {
                        this.foodLeft = this.foodCount;
                        this.playing = false;
                    }
                } else
                    this.snake.pop();

                this.stepCount++;
                !this.manual && this.think();
                return true;
            }
        },
        playOrPause() {
            if (this.playing)
                this.playing = false;
            else if (!this.status) {
                this.playing = true;
                this.animate();
            }
        },
        animate() {
            this.step();
            this.playing && setTimeout(this.animate.bind(this), this.interval);
        },
        onKeyDown(e) {
            if (!this.manual)
                return;

            e.preventDefault();
            const direction = e.keyCode - 37;
            if (this.snake.length >= 2 && Math.abs(this.snake.direction - direction) === 2)
                return;

            this.snake.direction = direction;
            !this.playing && this.step();
        },
        think() {
            if (this.nobrain) {
                const head = this.snake.head;
                // const body = [head];
                // debugger;
                // let next = this.getAndCheckNext(head, KEY_ENUM.left);
                // if (next)
                //     this.snake.direction = KEY_ENUM.left;
                // else
                //     next = this.getAndCheckNext(head, KEY_ENUM.up);
                // if (next)
                //     this.snake.direction = KEY_ENUM.up;
                // else
                //     next = this.getAndCheckNext(head, KEY_ENUM.right);
                // if (next)
                //     this.snake.direction = KEY_ENUM.right;
                // else
                //     next = this.getAndCheckNext(head, KEY_ENUM.down);
                // if (next)
                //     this.snake.direction = KEY_ENUM.down;

                if (head.y === 0)
                    this.snake.direction = head.x === 0 ? KEY_ENUM.down : KEY_ENUM.left;
                else {
                    if (head.x % 2 === 0)
                        this.snake.direction = head.y === this.height - 1 ? KEY_ENUM.right : KEY_ENUM.down;
                    else
                        this.snake.direction = head.y === 1 && head.x !== this.width - 1 ? KEY_ENUM.right : KEY_ENUM.up;
                }

                return;
            }

            if (this.pathThought.length > 1) {
                const next = this.pathThought.shift();
                this.snake.direction = this.pathThought[0].direction;
                return;
            }

            // record
            this.pathThought = [];
            const head = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__LinkedPoint__["a" /* default */](this.snake.head), {
                prev: null,
                distance: 0,
                direction: this.snake.getNaturalDirection(),
            });

            let end = this.bfs(head, this.food);
            if (!end)
                end = this.bfs(head, this.snake.tail);
            if (end) {
                let point = end;
                while (point && point.prev) {
                    this.pathThought.unshift(point);
                    point = point.prev;
                }
                this.snake.direction = this.pathThought[0].direction;
            } else {
                this.playing = false;
                for (const direction in KEY_ENUM) {
                    const next = this.getAndCheckNext(head, KEY_ENUM[direction]);
                    if (next) {
                        this.snake.direction = KEY_ENUM[direction];
                        break;
                    }
                }
            }
        },
        bfs(start, end, checkTail) {
            const marks = [];
            const getMark = (point) => marks[point.y * this.width + point.x];
            const setMark = (point) => marks[point.y * this.width + point.x] = point;

            setMark(start);
            const queue = [start];
            while (queue.length) {
                const current = queue.shift();
                for (const direction in KEY_ENUM) {
                    if (current.direction !== undefined && Math.abs(current.direction - KEY_ENUM[direction]) === 2)
                        continue;
                    let next = this.getAndCheckNext2(current, KEY_ENUM[direction], end);
                    if (!next)
                        continue;

                    next = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__LinkedPoint__["a" /* default */](next), {
                        prev: current,
                        distance: current.distance + 1,
                        direction: KEY_ENUM[direction],
                    });

                    if (checkTail) {
                        const body = this.getDynamicBody(next, next.is(end));
                        const tail = body[body.length - 1];
                        const result = this.bfs(next, tail);
                        if (!result)
                            continue;

                        if (next.is(end)) {
                            if (this.debug)
                                debugger;
                            if (result.distanceOf(end) <= 1)
                                continue;
                            else
                                return next;
                        }
                    } else {
                        if (next.is(end))
                            return next;
                    }

                    const oldNext = getMark(next);
                    if (!oldNext || oldNext.distance > next.distance) {
                        queue.push(next);
                        setMark(next);
                    }
                }
            }
        },
    },
});


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(108);


class LinkedPoint extends __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */] {
    // constructor(point) {
    //     Object.assign
    // }
}

/* harmony default export */ __webpack_exports__["a"] = (LinkedPoint);


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Snake {
    // direction
    // body

    constructor(snake) {
        Object.assign(this, snake);
    }

    get length() {
        return this.body.length;
    }

    get head() {
        return this.body[0];
    }

    get tail() {
        return this.body[this.length - 1];
    }

    isHead(point) {
        return this.head.is(point);
    }

    isInBody(point) {
        return this.body.some((point2) => point2.is(point));
    }

    unshift(point) {
        return this.body.unshift(point);
    }

    pop() {
        return this.body.pop();
    }

    getNaturalDirection() {
        const head = this.head;
        const neck = this.body[1];
        if (neck)
            return (head.x - neck.x + 1) * Math.abs(head.x - neck.x) + (head.y - neck.y + 2) * Math.abs(head.y - neck.y);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Snake);


/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root,
    attrs: {
      "tabindex": "1"
    },
    on: {
      "keydown": _vm.onKeyDown
    }
  }, [_c('div', {
    class: _vm.$style.area,
    style: ({
      width: _vm.areaWidth + 'px',
      height: _vm.areaHeight + 'px'
    }),
    attrs: {
      "status": _vm.status
    }
  }, _vm._l((_vm.pointMetrix), function(point) {
    return _c('div', {
      class: _vm.$style.point,
      attrs: {
        "role": _vm.getRole(point),
        "path": _vm.isInPathThought(point)
      }
    })
  })), _c('div', {
    class: _vm.$style.foot
  }, [_c('u-button', {
    nativeOn: {
      "click": function($event) {
        _vm.playOrPause()
      }
    }
  }, [_vm._v(_vm._s(_vm.playing ? '⏸' : '▶️'))]), _c('u-button', {
    nativeOn: {
      "click": function($event) {
        _vm.step()
      }
    }
  }, [_vm._v("下一步")]), _c('u-button', {
    nativeOn: {
      "click": function($event) {
        _vm.reset()
      }
    }
  }, [_vm._v("重置")])], 1), _c('div', {
    class: _vm.$style.foot
  }, [_vm._v("\n        步数：" + _vm._s(_vm.stepCount) + ", 长度：" + _vm._s(_vm.snake.length) + "\n    ")])])
},staticRenderFns: []}

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("贪吃蛇AI")]), _c('u-snake-game', {
    attrs: {
      "width": 12,
      "height": 12
    }
  }), _c('h3', [_vm._v("单纯寻路")]), _c('h4', [_vm._v("容易进入死胡同")]), _c('u-snake-game', {
    attrs: {
      "width": 6,
      "height": 6,
      "body": [{
          x: 3,
          y: 1
        },
        {
          x: 2,
          y: 1
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 0,
          y: 1
        },
        {
          x: 0,
          y: 2
        },
        {
          x: 0,
          y: 3
        },
        {
          x: 1,
          y: 3
        },
        {
          x: 2,
          y: 3
        },
        {
          x: 3,
          y: 3
        },
        {
          x: 4,
          y: 3
        },
        {
          x: 5,
          y: 3
        } ],
      "initial-food": [{
        x: 1,
        y: 2
      }],
      "food-count": 1
    }
  }), _c('p'), _c('u-snake-game', {
    attrs: {
      "width": 6,
      "height": 6,
      "body": [{
          x: 1,
          y: 0
        },
        {
          x: 2,
          y: 0
        },
        {
          x: 3,
          y: 0
        },
        {
          x: 3,
          y: 1
        },
        {
          x: 3,
          y: 2
        },
        {
          x: 3,
          y: 3
        },
        {
          x: 3,
          y: 4
        },
        {
          x: 2,
          y: 4
        },
        {
          x: 1,
          y: 4
        },
        {
          x: 0,
          y: 4
        },
        {
          x: 0,
          y: 3
        },
        {
          x: 1,
          y: 3
        },
        {
          x: 1,
          y: 2
        } ],
      "initial-food": [{
        x: 0,
        y: 2
      }],
      "food-count": 1,
      "debug": ""
    }
  }), _c('h4', [_vm._v("能吃的情况一定有最短路径，障碍物要动态分析")]), _c('u-snake-game', {
    attrs: {
      "width": 6,
      "height": 6,
      "body": [{
          x: 4,
          y: 2
        },
        {
          x: 4,
          y: 1
        },
        {
          x: 3,
          y: 1
        },
        {
          x: 2,
          y: 1
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 0,
          y: 1
        } ],
      "initial-food": [{
        x: 0,
        y: 0
      }],
      "food-count": 1
    }
  }), _c('h4', [_vm._v("能活下来的充分条件是有通向尾巴的路径")]), _c('p', [_vm._v("每一步行动都把这个充分条件作为判断依据")]), _c('h4', [_vm._v("无脑模式")]), _c('u-snake-game', {
    attrs: {
      "width": 6,
      "height": 6,
      "body": [{
        x: 0,
        y: 0
      }],
      "nobrain": ""
    }
  }), _vm._m(0), _c('h3', [_vm._v("怎么把蛇弄死")]), _c('p', [_vm._v("定理1：对于任意随机食物序列，贪吃蛇能吃满所有格子的必要条件是贪吃蛇所走的路径一定能首尾相连。")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("智能checkNext")]), _c('li', [_vm._v("智能判断封闭路径")]), _c('li', [_vm._v("3D贪吃蛇")])])
}]}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var cssModules = {}
function injectStyle (ssrContext) {

              var oldLocals = this['$style'];
              var newLocals = __webpack_require__(188);
              if (oldLocals && oldLocals.root === 'Index.vue')
                  newLocals = Object.assign({}, oldLocals, newLocals);
              cssModules['$style'] = newLocals;
            this['$style'] = cssModules['$style']
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(198),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});