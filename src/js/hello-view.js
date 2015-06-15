(function() {
    'use strict';

    /**
     * Hello View module used to handle UI rendering
     */
    DI.App.HelloView = (function() {

        /**
         * Handles the rendering of this View Module
         * @param elementID The id of the element housing the application
         * @param model The model object holding dynamic data
         */
        var render = function render(elementID, model) {
            //Creating the stringified template and model
            var stringifiedTemplate = '<h1>Hello ' +  model.place + '</h1>';
            //Placing the stringified template into the DOM
            $('#' + elementID).html(stringifiedTemplate);
        };

        //API for Module Revealing Pattern
        return {
            render: render
        };

    })();

})();