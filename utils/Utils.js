'use strict';

class Utils {

    static extract(req){
        const swap = {};
        Object.assign(swap, req.params);
        Object.assign(swap, req.query);
        Object.assign(swap, req.body);
        return swap;
    }
}

module.exports = Utils;