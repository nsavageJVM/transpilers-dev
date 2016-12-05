goog.provide('dev.app.Component'); // this code is used as a dependency in the editor and list widgets

goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('goog.ui.Component');
goog.require('goog.ui.ComboBox');



dev.app.Component = function(opt_label) {
  goog.base(this);

  this.initialLabel_ = opt_label || 'Click Me';

  this.color_ = '#CCFF33';

  this.kh_ = null;

};

goog.inherits(dev.app.Component, goog.ui.Component);

dev.app.Component.prototype.fireEvent = function(event) {
		alert("events wired up"+this.initialLabel_);
}


dev.app.Component.prototype.createDom = function() {

  this.decorateInternal(this.dom_.createElement('span'));

}

dev.app.Component.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);

  if (!this.getLabelText()) {
    this.setLabelText(this.initialLabel_);
  }

  var elem = this.getElement();
  goog.dom.classes.add(elem, goog.getCssName('dev.app.Component'));


  this.kh_ = new goog.events.KeyHandler(elem);

  this.getHandler().listen(this.kh_, goog.events.KeyHandler.EventType.KEY,
      this.onKey_);


};


dev.app.Component.prototype.onDivClicked_ = function(event) {
  this.fireEvent();
}

dev.app.Component.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  if (this.kh_) {
    this.kh_.dispose();
  }
}

dev.app.Component.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  this.getHandler().listen(this.getElement(), goog.events.EventType.CLICK, this.onDivClicked_);
}

dev.app.Component.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
}

dev.app.Component.prototype.getLabelText = function() {
  if (!this.getElement()) {
    return '';
  }
  return goog.dom.getTextContent(this.getElement());
}


dev.app.Component.prototype.onKey_ = function(event) {
  var keyCodes = goog.events.KeyCodes;
  if (event.keyCode == keyCodes.SPACE || event.keyCode == keyCodes.ENTER) {
    this.fireEvent();
  }
}

dev.app.Component.prototype.setLabelText = function(text) {
  if (this.getElement()) {
    goog.dom.setTextContent(this.getElement(), text);
  }
}
;
goog.exportSymbol('dev.app.Component', dev.app.Component);
