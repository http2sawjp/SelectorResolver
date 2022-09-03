import { SelectorResolver } from "./es6";

class Wrapper {
    static resolveCondExample = {
        isNotNull: elem => elem != null
        , hasClientHeight: () => !(!elem.clientHeight)
    }

    constructor(intervalRepeatMax, resolveCond) {
        this.resolverInst = new SelectorResolver(intervalRepeatMax, resolveCond);
    }
}

function singleElemTest() {
    let resInst = new Wrapper(10, 100).resolverInst;

    resInst.doResolveByCond("#some-root > section:nth-child(1) > div > div:nth-child(1) > [type='button']", Wrapper.resolveCondExample.isNotNull)
    .then(elem => console.log(elem))
    .catch(err => console.log(err));
}

function manyElemsTest() {
    let resInst = new Wrapper(10, 100).resolverInst;

    Promise.all([
        resInst.doResolveByCond("#some-root > section:nth-child(2)", Wrapper.resolveCondExample.isNotNull)
        , resInst.doResolveByCond("#some-root > section:nth-child(3)", Wrapper.resolveCondExample.isNotNull)
        , resInst.doResolveByCond("#some-root > section:nth-child(4)", Wrapper.resolveCondExample.isNotNull)
    ])
    .then(elems => console.log(elems))
    .catch(err => console.log(err))
}

singleElemTest();
manyElemsTest();