(function() {
    'use strict';

    //The element id specifying where the web application will reside
    var APP_ELEMENT_ID = 'app';

    /**
     * Initiates the view interaction.
     * @param model The data to be applied to the view
     */
    var initializeHelloView = function initializeHelloView(model) {
        DI.App.HelloView.render(APP_ELEMENT_ID, model);
    };

    /**
     * "Main" functionality for the application
     * Is invoked when the DOM Ready event is fired thanks to jQuery.
     */
    $(function() {

        //Hello model containing place information
        var helloModel = {
            place: 'World'
        };

        //Get the Hello view setup for the application
        initializeHelloView(helloModel);

    });

})();