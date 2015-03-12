modules.define('slider', function (provide, Slider) {

    provide(Slider.decl({
        onSetMod: {
            js: {
                inited: function () {
                    this.__base.apply(this, arguments);
                    this._timeChange = this.params.timeChange || 5000;
                    this._autoPlay();
                }
            }
        },

        _onInterval: function(numberSlides) {
            var index = this._getIndex(this.elem('circle', 'active', true));

            index++;
            this._showSlide(index === numberSlides ? 0 : index);
        },

        _autoPlay: function() {
            this._playInterval = setInterval(this._onInterval.bind(this, this.elem('circle').length), this._timeChange);
            this.bindTo('mouseover', this._onHover);
        },

        _onHover: function() {
            clearInterval(this._playInterval);
            this.unbindFrom('mouseover', this._onHover);
            this.bindTo('mouseout', this._onHoverFinish);
        },

        _onHoverFinish: function() {
            this._autoPlay();
            this.unbindFrom('mouseout', this._onHoverFinish);
        }
    }))
});
