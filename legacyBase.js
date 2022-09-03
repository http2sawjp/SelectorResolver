function resolveSelectorByCond(selector, intervalRepeatMax, intervalMarginMilSec) {
    return new Promise(function(resolve, reject) {
        var _elem = null
        , _intervalCnt = 0
        , _interval = setInterval(function() {
            _intervalCnt++;
    
            if(_intervalCnt > intervalRepeatMax) {
                clearInterval(_interval);
                reject(new Error("reached interval max. selector => " + selector + "."));
            }

            _elem = document.querySelector(selector);

            if(_elem) {
                clearInterval(_interval);
                resolve({
                    elem: _elem
                    , selector: selector
                    , intervalCnt: _intervalCnt
                }); 
            }
        }, intervalMarginMilSec);
    });
}