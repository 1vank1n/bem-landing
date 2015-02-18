modules.define('counter', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                    var _count = this.params['count'];
                    var _h = this.findBlockInside({'block' : 'heading', 'modName' : 'count', 'modVal' : 'yes'});
                    var i = 0;

                    setTimeout( function () {
                        setInterval( function () {
                            if (i <= _count) {
                                _h.domElem.text(i++);
                            }
                        }, 1);
                    }, 500);

                }
            }
        }
    }))
});