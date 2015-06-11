# hello-plain-old-javascript
A simple example of Hello World written with POJSOs (Plain Old JavaScript Objects).

##What is this?
This example shows how to utilize POJSOs to populate string templates.

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the MVC architecture will be attached too.

### Within the js/hello-view.js
A JavaScript module (i.e. Revealing Module Pattern Object) is created to handle view logic. The view exposes a render function that is invoked to place this view into the DOM (Document Object Model). 

### Within the js/application-controller.js
An initialization function is utilized to start the view interaction. This method is invoked when the DOM is ready to be interacted with. The controller hands the view the model that is to be applied.

### Within the index.html
The index.html contains the Backbone application element, just a plain old HTML element. In this case a `<div id="app">`. 

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. jQuery  & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser