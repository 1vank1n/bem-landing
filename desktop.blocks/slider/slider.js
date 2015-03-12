modules.define('slider', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    // переключение слайдов
                    this.bindTo(this.elem('circle'), 'click', this._onClick);
                    // показываем первый слайд
                    this._showSlide(0);
                }
            }
        },

        _onClick: function(e) {
            var $target = $(e.currentTarget),
                index = this._getIndex($target);

            this._showSlide(index);
        },

        _getIndex: function(elem) {
            return this.elem('circle').index(elem);
        },

        _showSlide: function(index) {
            this.delMod(this.elem('slide'), 'active');
            this.setMod(this.elem('slide').eq(index), 'active', true);
            this.delMod(this.elem('circle'), 'active');
            this.setMod(this.elem('circle').eq(index), 'active', true);
        }
    }))
});
