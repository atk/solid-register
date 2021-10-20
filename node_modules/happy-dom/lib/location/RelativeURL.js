"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper class for getting the URL relative to a Location object.
 */
var RelativeURL = /** @class */ (function () {
    function RelativeURL() {
    }
    /**
     * Returns a URL relative to the given Location object.
     *
     * @param location Location.
     * @param url URL.
     */
    RelativeURL.getAbsoluteURL = function (location, url) {
        if (url.startsWith('/')) {
            return location.origin + url;
        }
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            var pathname = location.pathname;
            if (pathname.endsWith('/')) {
                pathname = pathname.slice(0, -1);
            }
            return location.origin + pathname + '/' + url;
        }
        return url;
    };
    return RelativeURL;
}());
exports.default = RelativeURL;
//# sourceMappingURL=RelativeURL.js.map