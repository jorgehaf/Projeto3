$(document).ready(function () {
    var _view = view.getInstance;
    _view.inicializar();
});

var view = (function () {
    var instance;

    function init() {
        var inicializar = function () {
            console.log("fala cmg");
        };

        return {
            inicializar
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