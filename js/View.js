$(document).ready( function (){
    var _view = view.getInstance;
    _view.inicializar();
});

var view = (function () {
    var instance;


    function init() {
        var inicializar = function () {};

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
        }
    }
})();
