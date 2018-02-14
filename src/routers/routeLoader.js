/* global __PID__ */
/* eslint no-undef: "error" */

import BASE from './route_BASE';

let route;

module.exports = {
    init() {
        switch (__PID__) {
            case 'MTK':
                route = BASE;
                break;
            default:
                route = BASE;
                break;
        }
    },

    getRoute() {
        return route;
    }
};
