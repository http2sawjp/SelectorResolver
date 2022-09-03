export class SelectorResolver {
    constructor(intervalRepeatMax, intervalMarginMilSec) {
        [this.intervalRepeatMax, this.intervalMarginMilSec] = [intervalRepeatMax, intervalMarginMilSec];
    }

    doResolveByCond(selector, resolveCond) {
        return new Promise((resolve, reject) => {
            if(!resolveCond) { reject(new Error("resolveCond is not a function.")); }

            let elem = null
            , intervalCnt = 0
            , interval = setInterval(() => {
                intervalCnt++;

                if(intervalCnt > this.intervalRepeatMax) {
                    clearInterval(interval);
                    reject(new Error(`reached interval max. selector => "${selector}".`));
                }

                elem = document.querySelector(selector);

                if(resolveCond(elem)) {
                    clearInterval(interval);
                    resolve({
                        elem: elem
                        , selector: selector
                        , intervalCnt: intervalCnt
                    });
                }
            }, this.intervalMarginMilSec);
        });
    }
}