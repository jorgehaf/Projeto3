window.addEventListener("load", function () {
    var _view = view.getInstance();
    _view.start();
});

var view = (function () {
    var instance;

    function init() {
        var start = function () {
            console.log("jorgehaf");
        };

        return {
            start
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        },
    };
})();