goog.provide('dev.app');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');

 dev.app.makedom = function( )  {

  var toolbar = new goog.ui.Toolbar();
  toolbar.decorate(goog.dom.$('menu'));
  var button = new goog.ui.ToolbarButton('List View');
  toolbar.addChild(button, true);
  goog.style.setStyle(goog.dom.$('menu'), 'color', '#0080ff');
  goog.style.setStyle(goog.dom.$('menu'), 'position', 'relative');
  goog.style.setStyle(goog.dom.$('menu'), {'margin-top':'20px', 'margin-bottom':'20px'});


    var data =  [ ];

    data.push({
        title:"Google closure transpiled",
        content: "Content of Dom element 1"
    });

    data.push({
        title:"Google closure transpiled",
        content: "Content of Dom element 2"
    });




  for (var i = 0; i < data.length; i++) {

    headerElement = goog.dom.createDom('div', {'style': 'background-color:#EEE'}, data[i].title);
    contentElement = goog.dom.createDom('div', null,  data[i].content);

    var newNote = goog.dom.createDom('div', null,  headerElement,  contentElement);
    goog.dom.appendChild(goog.dom.$('root'), newNote);
    }

};


goog.exportSymbol('dev.app', dev.app);
goog.exportSymbol('dev.app.makedom', dev.app.makedom);