"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncTaskTypeEnum_1 = __importDefault(require("./AsyncTaskTypeEnum"));
/**
 * Handles async tasks.
 */
var AsyncTaskManager = /** @class */ (function () {
    function AsyncTaskManager() {
        this.tasks = {};
        this.queue = [];
    }
    /**
     * Returns a promise that is fulfilled when async tasks are complete.
     * This method is not part of the HTML standard.
     *
     * @returns Promise.
     */
    AsyncTaskManager.prototype.whenComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var timerID = global.setTimeout(function () {
                            _this.endTimer(timerID);
                        }, 0);
                        _this.startTimer(timerID);
                        _this.queue.push({ resolve: resolve, reject: reject });
                    })];
            });
        });
    };
    /**
     * Cancels all tasks.
     *
     * @param [error] Error.
     */
    AsyncTaskManager.prototype.cancelAllTasks = function (error) {
        if (this.tasks[AsyncTaskTypeEnum_1.default.timer]) {
            for (var _i = 0, _a = this.tasks[AsyncTaskTypeEnum_1.default.timer]; _i < _a.length; _i++) {
                var id = _a[_i];
                global.clearTimeout(id);
            }
        }
        var promises = this.queue;
        this.tasks = {};
        this.queue = [];
        for (var _b = 0, promises_1 = promises; _b < promises_1.length; _b++) {
            var promise = promises_1[_b];
            if (error) {
                promise.reject(error);
            }
            else {
                promise.resolve();
            }
        }
    };
    /**
     * Starts a timer.
     *
     * @param id Timer ID.
     */
    AsyncTaskManager.prototype.startTimer = function (id) {
        if (id === void 0) { id = null; }
        this.tasks[AsyncTaskTypeEnum_1.default.timer] = this.tasks[AsyncTaskTypeEnum_1.default.timer] || [];
        this.tasks[AsyncTaskTypeEnum_1.default.timer].push(id);
    };
    /**
     * Ends a timer.
     *
     * @param id Timer ID.
     */
    AsyncTaskManager.prototype.endTimer = function (id) {
        if (id === void 0) { id = null; }
        if (this.tasks[AsyncTaskTypeEnum_1.default.timer]) {
            var index = this.tasks[AsyncTaskTypeEnum_1.default.timer].indexOf(id);
            if (index !== -1) {
                this.tasks[AsyncTaskTypeEnum_1.default.timer].splice(index, 1);
                if (this.tasks[AsyncTaskTypeEnum_1.default.timer].length === 0) {
                    delete this.tasks[AsyncTaskTypeEnum_1.default.timer];
                    if (Object.keys(this.tasks).length === 0) {
                        this.cancelAllTasks();
                    }
                }
            }
        }
    };
    /**
     * Starts an async task.
     *
     * @param type Task type.
     */
    AsyncTaskManager.prototype.startTask = function (type) {
        this.tasks[type] = this.tasks[type] || [];
        this.tasks[type].push(type);
    };
    /**
     * Ends an async task.
     *
     * @param type Task type.
     * @param [error] Error.
     */
    AsyncTaskManager.prototype.endTask = function (type, error) {
        if (error) {
            this.cancelAllTasks(error);
        }
        else if (this.tasks[type]) {
            this.tasks[type].pop();
            if (this.tasks[type].length === 0) {
                delete this.tasks[type];
                if (Object.keys(this.tasks).length === 0) {
                    this.cancelAllTasks();
                }
            }
        }
    };
    /**
     * Returns the amount of running tasks by type.
     *
     * @param type Task type.
     * @returns Count.
     */
    AsyncTaskManager.prototype.getRunningCount = function (type) {
        if (this.tasks[type]) {
            return this.tasks[type].length;
        }
        return 0;
    };
    return AsyncTaskManager;
}());
exports.default = AsyncTaskManager;
//# sourceMappingURL=AsyncTaskManager.js.map