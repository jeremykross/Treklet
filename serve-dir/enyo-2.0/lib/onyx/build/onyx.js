
// minifier: path aliases

enyo.path.addPaths({css: "../source/css/"});

// Icon.js

enyo.kind({
name: "onyx.Icon",
published: {
src: ""
},
classes: "onyx-icon",
create: function() {
this.inherited(arguments), this.src && this.srcChanged();
},
srcChanged: function() {
this.applyStyle("background-image", "url(" + enyo.path.rewrite(this.src) + ")");
}
});

// Button.js

enyo.kind({
name: "onyx.Button",
kind: "enyo.Button",
classes: "onyx-button enyo-unselectable"
});

// IconButton.js

enyo.kind({
name: "onyx.IconButton",
kind: "onyx.Icon",
published: {
active: !1
},
classes: "onyx-icon-button",
rendered: function() {
this.inherited(arguments), this.activeChanged();
},
tap: function() {
this.setActive(!0);
},
activeChanged: function() {
this.bubble("onActivate");
}
});

// Checkbox.js

enyo.kind({
name: "onyx.Checkbox",
classes: "onyx-checkbox",
kind: enyo.Checkbox,
tag: "div",
handlers: {
ondown: "downHandler",
onclick: ""
},
downHandler: function(a, b) {
return this.disabled || (this.setChecked(!this.getChecked()), this.bubble("onchange")), !0;
},
tap: function(a, b) {
return !this.disabled;
}
});

// Drawer.js

enyo.kind({
name: "onyx.Drawer",
published: {
open: !0,
orient: "v"
},
style: "overflow: hidden; position: relative;",
tools: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorEnd"
}, {
name: "client",
style: "position: relative;",
classes: "enyo-border-box"
} ],
create: function() {
this.inherited(arguments), this.openChanged();
},
initComponents: function() {
this.createChrome(this.tools), this.inherited(arguments);
},
openChanged: function() {
this.$.client.show();
if (this.hasNode()) if (this.$.animator.isAnimating()) this.$.animator.reverse(); else {
var a = this.orient == "v", b = a ? "height" : "width", c = a ? "top" : "left";
this.applyStyle(b, null);
var d = this.hasNode()[a ? "scrollHeight" : "scrollWidth"];
this.$.animator.play({
startValue: this.open ? 0 : d,
endValue: this.open ? d : 0,
dimension: b,
position: c
});
} else this.$.client.setShowing(this.open);
},
animatorStep: function(a) {
if (this.hasNode()) {
var b = a.dimension;
this.node.style[b] = this.domStyles[b] = a.value + "px";
}
var c = this.$.client.hasNode();
if (c) {
var d = a.position, e = this.open ? a.endValue : a.startValue;
c.style[d] = this.$.client.domStyles[d] = a.value - e + "px";
}
this.container && this.container.resized();
},
animatorEnd: function() {
this.open || this.$.client.hide(), this.container && this.container.resized();
}
});

// Grabber.js

enyo.kind({
name: "onyx.Grabber",
classes: "onyx-grabber"
});

// Groupbox.js

enyo.kind({
name: "onyx.Groupbox",
classes: "onyx-groupbox"
}), enyo.kind({
name: "onyx.GroupboxHeader",
classes: "onyx-groupbox-header"
});

// Input.js

enyo.kind({
name: "onyx.Input",
kind: "enyo.Input",
classes: "onyx-input"
});

// Popup.js

enyo.kind({
name: "onyx.Popup",
kind: "Popup",
classes: "onyx-popup",
published: {
scrimWhenModal: !0,
scrim: !1,
scrimClassName: ""
},
statics: {
count: 0
},
defaultZ: 120,
showingChanged: function() {
this.showing ? (onyx.Popup.count++, this.applyZIndex()) : onyx.Popup.count > 0 && onyx.Popup.count--, this.showHideScrim(this.showing), this.inherited(arguments);
},
showHideScrim: function(a) {
if (this.floating && (this.scrim || this.modal && this.scrimWhenModal)) {
var b = this.getScrim();
if (a) {
var c = this.getScrimZIndex();
this._scrimZ = c, b.showAtZIndex(c);
} else b.hideAtZIndex(this._scrimZ);
enyo.call(b, "addRemoveClass", [ this.scrimClassName, b.showing ]);
}
},
getScrimZIndex: function() {
return this.findZIndex() - 1;
},
getScrim: function() {
return this.modal && this.scrimWhenModal && !this.scrim ? onyx.scrimTransparent.make() : onyx.scrim.make();
},
applyZIndex: function() {
this._zIndex = onyx.Popup.count * 2 + this.findZIndex() + 1, this.applyStyle("z-index", this._zIndex);
},
findZIndex: function() {
var a = this.defaultZ;
return this._zIndex ? a = this._zIndex : this.hasNode() && (a = Number(enyo.dom.getComputedStyleValue(this.node, "z-index")) || a), this._zIndex = a;
}
});

// TextArea.js

enyo.kind({
name: "onyx.TextArea",
kind: "enyo.TextArea",
classes: "onyx-textarea"
});

// RichText.js

enyo.kind({
name: "onyx.RichText",
kind: "enyo.RichText",
classes: "onyx-richtext"
});

// InputDecorator.js

enyo.kind({
name: "onyx.InputDecorator",
kind: "enyo.ToolDecorator",
tag: "label",
classes: "onyx-input-decorator",
handlers: {
onDisabledChange: "disabledChange",
onfocus: "receiveFocus",
onblur: "receiveBlur"
},
receiveFocus: function() {
this.addClass("onyx-focused");
},
receiveBlur: function() {
this.removeClass("onyx-focused");
},
disabledChange: function(a, b) {
this.addRemoveClass("onyx-disabled", b.originator.disabled);
}
});

// Tooltip.js

enyo.kind({
name: "onyx.Tooltip",
kind: "onyx.Popup",
classes: "onyx-tooltip below left-arrow",
autoDismiss: !1,
showDelay: 500,
defaultLeft: -6,
handlers: {
onRequestShowTooltip: "requestShow",
onRequestHideTooltip: "requestHide"
},
requestShow: function() {
return this.showJob = setTimeout(enyo.bind(this, "show"), this.showDelay), !0;
},
cancelShow: function() {
clearTimeout(this.showJob);
},
requestHide: function() {
return this.cancelShow(), this.inherited(arguments);
},
showingChanged: function() {
this.cancelShow(), this.adjustPosition(!0), this.inherited(arguments);
},
applyPosition: function(a) {
var b = "";
for (n in a) b += n + ":" + a[n] + (isNaN(a[n]) ? "; " : "px; ");
this.addStyles(b);
},
adjustPosition: function(a) {
if (this.showing && this.hasNode()) {
var b = this.node.getBoundingClientRect();
b.top + b.height > window.innerHeight ? (this.addRemoveClass("below", !1), this.addRemoveClass("above", !0)) : (this.addRemoveClass("above", !1), this.addRemoveClass("below", !0)), b.left + b.width > window.innerWidth && (this.applyPosition({
"margin-left": -b.width,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !1), this.addRemoveClass("right-arrow", !0));
}
},
resizeHandler: function() {
this.applyPosition({
"margin-left": this.defaultLeft,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !0), this.addRemoveClass("right-arrow", !1), this.adjustPosition(!0), this.inherited(arguments);
}
});

// TooltipDecorator.js

enyo.kind({
name: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator",
handlers: {
onenter: "enter",
onleave: "leave"
},
enter: function() {
this.requestShowTooltip();
},
leave: function() {
this.requestHideTooltip();
},
tap: function() {
this.requestHideTooltip();
},
requestShowTooltip: function() {
this.waterfallDown("onRequestShowTooltip");
},
requestHideTooltip: function() {
this.waterfallDown("onRequestHideTooltip");
}
});

// MenuDecorator.js

enyo.kind({
name: "onyx.MenuDecorator",
kind: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator enyo-unselectable",
handlers: {
onActivate: "activated",
onHide: "menuHidden"
},
activated: function(a, b) {
this.requestHideTooltip(), b.originator.active && (this.menuActive = !0, this.activator = b.originator, this.activator.addClass("active"), this.requestShowMenu());
},
requestShowMenu: function() {
this.waterfallDown("onRequestShowMenu", {
activator: this.activator
});
},
requestHideMenu: function() {
this.waterfallDown("onRequestHideMenu");
},
menuHidden: function() {
this.menuActive = !1, this.activator && (this.activator.setActive(!1), this.activator.removeClass("active"));
},
enter: function(a) {
this.menuActive || this.inherited(arguments);
},
leave: function(a, b) {
this.menuActive || this.inherited(arguments);
}
});

// Menu.js

enyo.kind({
name: "onyx.Menu",
kind: "onyx.Popup",
modal: !0,
defaultKind: "onyx.MenuItem",
classes: "onyx-menu",
showOnTop: !1,
handlers: {
onActivate: "itemActivated",
onRequestShowMenu: "requestMenuShow",
onRequestHideMenu: "requestHide"
},
itemActivated: function(a, b) {
return b.originator.setActive(!1), !0;
},
showingChanged: function() {
this.inherited(arguments), this.adjustPosition(!0);
},
requestMenuShow: function(a, b) {
if (this.floating) {
var c = b.activator.hasNode();
if (c) {
var d = this.activatorOffset = this.getPageOffset(c);
this.applyPosition({
top: d.top + (this.showOnTop ? 0 : d.height),
left: d.left,
width: d.width
});
}
}
return this.show(), !0;
},
applyPosition: function(a) {
var b = "";
for (n in a) b += n + ":" + a[n] + (isNaN(a[n]) ? "; " : "px; ");
this.addStyles(b);
},
getPageOffset: function(a) {
var b = a.getBoundingClientRect(), c = window.pageYOffset === undefined ? document.documentElement.scrollTop : window.pageYOffset, d = window.pageXOffset === undefined ? document.documentElement.scrollLeft : window.pageXOffset, e = b.height === undefined ? b.bottom - b.top : b.height, f = b.width === undefined ? b.right - b.left : b.width;
return {
top: b.top + c,
left: b.left + d,
height: e,
width: f
};
},
adjustPosition: function(a) {
if (this.showing && this.hasNode()) {
this.removeClass("onyx-menu-up"), this.floating ? enyo.noop : this.applyPosition({
left: "auto"
});
var b = this.node.getBoundingClientRect(), c = b.height === undefined ? b.bottom - b.top : b.height, d = window.innerHeight === undefined ? document.documentElement.clientHeight : window.innerHeight, e = window.innerWidth === undefined ? document.documentElement.clientWidth : window.innerWidth;
this.menuUp = b.top + c > d && d - b.bottom < b.top - c, this.addRemoveClass("onyx-menu-up", this.menuUp);
if (this.floating) {
var f = this.activatorOffset;
this.menuUp ? this.applyPosition({
top: f.top - c + (this.showOnTop ? f.height : 0),
bottom: "auto"
}) : b.top < f.top && f.top + (a ? f.height : 0) + c < d && this.applyPosition({
top: f.top + (this.showOnTop ? 0 : f.height),
bottom: "auto"
});
}
b.right > e && (this.floating ? this.applyPosition({
left: f.left - (b.left + b.width - e)
}) : this.applyPosition({
left: -(b.right - e)
}));
}
},
resizeHandler: function() {
this.inherited(arguments), this.adjustPosition(!0);
},
requestHide: function() {
this.setShowing(!1);
}
});

// MenuItem.js

enyo.kind({
name: "onyx.MenuItem",
kind: "enyo.Button",
tag: "div",
classes: "onyx-menu-item",
events: {
onSelect: ""
},
tap: function(a) {
this.inherited(arguments), this.bubble("onRequestHideMenu"), this.doSelect({
selected: this,
content: this.content
});
}
});

// PickerDecorator.js

enyo.kind({
name: "onyx.PickerDecorator",
kind: "onyx.MenuDecorator",
classes: "onyx-picker-decorator",
defaultKind: "onyx.PickerButton",
handlers: {
onChange: "change"
},
change: function(a, b) {
this.waterfallDown("onChange", b);
}
});

// PickerButton.js

enyo.kind({
name: "onyx.PickerButton",
kind: "onyx.Button",
handlers: {
onChange: "change"
},
change: function(a, b) {
this.setContent(b.content);
}
});

// Picker.js

enyo.kind({
name: "onyx.Picker",
kind: "onyx.Menu",
classes: "onyx-picker enyo-unselectable",
published: {
selected: null,
maxHeight: "200px"
},
events: {
onChange: ""
},
components: [ {
name: "client",
kind: "enyo.Scroller",
strategyKind: "TouchScrollStrategy"
} ],
floating: !0,
showOnTop: !0,
scrollerName: "client",
create: function() {
this.inherited(arguments), this.maxHeightChanged();
},
getScroller: function() {
return this.$[this.scrollerName];
},
maxHeightChanged: function() {
this.getScroller().setMaxHeight(this.maxHeight);
},
showingChanged: function() {
this.getScroller().setShowing(this.showing), this.inherited(arguments), this.showing && this.selected && this.scrollToSelected();
},
scrollToSelected: function() {
this.getScroller().scrollToControl(this.selected, !this.menuUp);
},
itemActivated: function(a, b) {
return this.processActivatedItem(b.originator), this.inherited(arguments);
},
processActivatedItem: function(a) {
a.active && this.setSelected(a);
},
selectedChanged: function(a) {
a && a.removeClass("selected"), this.selected && (this.selected.addClass("selected"), this.doChange({
selected: this.selected,
content: this.selected.content
}));
},
resizeHandler: function() {
this.inherited(arguments), this.adjustPosition(!1);
}
});

// FlyweightPicker.js

enyo.kind({
name: "onyx.FlyweightPicker",
kind: "onyx.Picker",
classes: "onyx-flyweight-picker",
published: {
count: 0
},
events: {
onSetupItem: "",
onSelect: ""
},
handlers: {
onSelect: "itemSelect"
},
components: [ {
name: "scroller",
kind: "enyo.Scroller",
strategyKind: "TouchScrollStrategy",
components: [ {
name: "client",
kind: "FlyweightRepeater",
ontap: "itemTap"
} ]
} ],
scrollerName: "scroller",
create: function() {
this.inherited(arguments), this.countChanged();
},
rendered: function() {
this.inherited(arguments), this.selectedChanged();
},
scrollToSelected: function() {
var a = this.$.client.fetchRowNode(this.selected);
this.getScroller().scrollToNode(a, !this.menuUp);
},
countChanged: function() {
this.$.client.count = this.count;
},
processActivatedItem: function(a) {
this.item = a;
},
selectedChanged: function(a) {
if (!this.item) return;
a !== undefined && (this.item.removeClass("selected"), this.$.client.renderRow(a)), this.item.addClass("selected"), this.$.client.renderRow(this.selected), this.item.removeClass("selected");
var b = this.$.client.fetchRowNode(this.selected);
this.doChange({
selected: this.selected,
content: b && b.textContent || this.item.content
});
},
itemTap: function(a, b) {
this.setSelected(b.rowIndex), this.doSelect({
selected: this.item,
content: this.item.content
});
},
itemSelect: function(a, b) {
if (b.originator != this) return !0;
}
});

// RadioButton.js

enyo.kind({
name: "onyx.RadioButton",
kind: "Button",
classes: "onyx-radiobutton"
});

// RadioGroup.js

enyo.kind({
name: "onyx.RadioGroup",
kind: "Group",
highlander: !0,
defaultKind: "onyx.RadioButton"
});

// ToggleButton.js

enyo.kind({
name: "onyx.ToggleButton",
classes: "onyx-toggle-button",
published: {
active: !1,
value: !1,
onContent: "On",
offContent: "Off",
disabled: !1
},
events: {
onChange: ""
},
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
components: [ {
name: "contentOn",
classes: "onyx-toggle-content on"
}, {
name: "contentOff",
classes: "onyx-toggle-content off"
}, {
classes: "onyx-toggle-button-knob"
} ],
create: function() {
this.inherited(arguments), this.value = Boolean(this.value || this.active), this.onContentChanged(), this.offContentChanged(), this.disabledChanged();
},
rendered: function() {
this.inherited(arguments), this.valueChanged();
},
valueChanged: function() {
this.addRemoveClass("off", !this.value), this.$.contentOn.setShowing(this.value), this.$.contentOff.setShowing(!this.value), this.setActive(this.value);
},
activeChanged: function() {
this.setValue(this.active), this.bubble("onActivate");
},
onContentChanged: function() {
this.$.contentOn.setContent(this.onContent || ""), this.$.contentOn.addRemoveClass("empty", !this.onContent);
},
offContentChanged: function() {
this.$.contentOff.setContent(this.offContent || ""), this.$.contentOff.addRemoveClass("empty", !this.onContent);
},
disabledChanged: function() {
this.addRemoveClass("disabled", this.disabled);
},
updateValue: function(a) {
this.disabled || (this.setValue(a), this.doChange({
value: this.value
}));
},
tap: function() {
this.updateValue(!this.value);
},
dragstart: function(a, b) {
if (b.horizontal) return b.preventDefault(), this.dragging = !0, this.dragged = !1, !0;
},
drag: function(a, b) {
if (this.dragging) {
var c = b.dx;
return Math.abs(c) > 10 && (this.updateValue(c > 0), this.dragged = !0), !0;
}
},
dragfinish: function(a, b) {
this.dragging = !1, this.dragged && b.preventTap();
}
});

// Toolbar.js

enyo.kind({
name: "onyx.Toolbar",
classes: "onyx onyx-toolbar onyx-toolbar-inline",
handlers: {
onHide: "render"
}
});

// Tooltip.js

enyo.kind({
name: "onyx.Tooltip",
kind: "onyx.Popup",
classes: "onyx-tooltip below left-arrow",
autoDismiss: !1,
showDelay: 500,
defaultLeft: -6,
handlers: {
onRequestShowTooltip: "requestShow",
onRequestHideTooltip: "requestHide"
},
requestShow: function() {
return this.showJob = setTimeout(enyo.bind(this, "show"), this.showDelay), !0;
},
cancelShow: function() {
clearTimeout(this.showJob);
},
requestHide: function() {
return this.cancelShow(), this.inherited(arguments);
},
showingChanged: function() {
this.cancelShow(), this.adjustPosition(!0), this.inherited(arguments);
},
applyPosition: function(a) {
var b = "";
for (n in a) b += n + ":" + a[n] + (isNaN(a[n]) ? "; " : "px; ");
this.addStyles(b);
},
adjustPosition: function(a) {
if (this.showing && this.hasNode()) {
var b = this.node.getBoundingClientRect();
b.top + b.height > window.innerHeight ? (this.addRemoveClass("below", !1), this.addRemoveClass("above", !0)) : (this.addRemoveClass("above", !1), this.addRemoveClass("below", !0)), b.left + b.width > window.innerWidth && (this.applyPosition({
"margin-left": -b.width,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !1), this.addRemoveClass("right-arrow", !0));
}
},
resizeHandler: function() {
this.applyPosition({
"margin-left": this.defaultLeft,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !0), this.addRemoveClass("right-arrow", !1), this.adjustPosition(!0), this.inherited(arguments);
}
});

// TooltipDecorator.js

enyo.kind({
name: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator",
handlers: {
onenter: "enter",
onleave: "leave"
},
enter: function() {
this.requestShowTooltip();
},
leave: function() {
this.requestHideTooltip();
},
tap: function() {
this.requestHideTooltip();
},
requestShowTooltip: function() {
this.waterfallDown("onRequestShowTooltip");
},
requestHideTooltip: function() {
this.waterfallDown("onRequestHideTooltip");
}
});

// ProgressBar.js

enyo.kind({
name: "onyx.ProgressBar",
classes: "onyx-progress-bar",
published: {
progress: 0,
min: 0,
max: 100,
barClasses: "",
showStripes: !0,
animateStripes: !0
},
events: {
onAnimateProgressFinish: ""
},
components: [ {
name: "progressAnimator",
kind: "Animator",
onStep: "progressAnimatorStep",
onEnd: "progressAnimatorComplete"
}, {
name: "bar",
classes: "onyx-progress-bar-bar"
} ],
create: function() {
this.inherited(arguments), this.progressChanged(), this.barClassesChanged(), this.showStripesChanged(), this.animateStripesChanged();
},
barClassesChanged: function(a) {
this.$.bar.removeClass(a), this.$.bar.addClass(this.barClasses);
},
showStripesChanged: function() {
this.$.bar.addRemoveClass("striped", this.showStripes);
},
animateStripesChanged: function() {
this.$.bar.addRemoveClass("animated", this.animateStripes);
},
progressChanged: function() {
this.progress = this.clampValue(this.min, this.max, this.progress);
var a = this.calcPercent(this.progress);
this.updateBarPosition(a);
},
clampValue: function(a, b, c) {
return Math.max(a, Math.min(c, b));
},
calcRatio: function(a) {
return (a - this.min) / (this.max - this.min);
},
calcPercent: function(a) {
return this.calcRatio(a) * 100;
},
updateBarPosition: function(a) {
this.$.bar.applyStyle("width", a + "%");
},
animateProgressTo: function(a) {
this.$.progressAnimator.play({
startValue: this.progress,
endValue: a,
node: this.hasNode()
});
},
progressAnimatorStep: function(a) {
return this.setProgress(a.value), !0;
},
progressAnimatorComplete: function(a) {
return this.doAnimateProgressFinish(a), !0;
}
});

// ProgressButton.js

enyo.kind({
name: "onyx.ProgressButton",
kind: "onyx.ProgressBar",
classes: "onyx-progress-button",
events: {
onCancel: ""
},
components: [ {
name: "progressAnimator",
kind: "Animator",
onStep: "progressAnimatorStep",
onEnd: "progressAnimatorComplete"
}, {
name: "bar",
classes: "onyx-progress-bar-bar onyx-progress-button-bar"
}, {
name: "client",
classes: "onyx-progress-button-client"
}, {
kind: "onyx.Icon",
src: "$lib/onyx/images/progress-button-cancel.png",
classes: "onyx-progress-button-icon",
ontap: "cancelTap"
} ],
cancelTap: function() {
this.doCancel();
}
});

// Scrim.js

enyo.kind({
name: "onyx.Scrim",
showing: !1,
classes: "onyx-scrim enyo-fit",
floating: !1,
create: function() {
this.inherited(arguments), this.zStack = [], this.floating && this.setParent(enyo.floatingLayer);
},
showingChanged: function() {
this.floating && this.showing && !this.hasNode() && this.render(), this.inherited(arguments);
},
addZIndex: function(a) {
enyo.indexOf(a, this.zStack) < 0 && this.zStack.push(a);
},
removeZIndex: function(a) {
enyo.remove(a, this.zStack);
},
showAtZIndex: function(a) {
this.addZIndex(a), a !== undefined && this.setZIndex(a), this.show();
},
hideAtZIndex: function(a) {
this.removeZIndex(a);
if (!this.zStack.length) this.hide(); else {
var b = this.zStack[this.zStack.length - 1];
this.setZIndex(b);
}
},
setZIndex: function(a) {
this.zIndex = a, this.applyStyle("z-index", a);
},
make: function() {
return this;
}
}), enyo.kind({
name: "onyx.scrimSingleton",
kind: null,
constructor: function(a, b) {
this.instanceName = a, enyo.setObject(this.instanceName, this), this.props = b || {};
},
make: function() {
var a = new onyx.Scrim(this.props);
return enyo.setObject(this.instanceName, a), a;
},
showAtZIndex: function(a) {
var b = this.make();
b.showAtZIndex(a);
},
hideAtZIndex: enyo.nop,
show: function() {
var a = this.make();
a.show();
}
}), new onyx.scrimSingleton("onyx.scrim", {
floating: !0,
classes: "onyx-scrim-translucent"
}), new onyx.scrimSingleton("onyx.scrimTransparent", {
floating: !0,
classes: "onyx-scrim-transparent"
});

// Slider.js

enyo.kind({
name: "onyx.Slider",
kind: "onyx.ProgressBar",
classes: "onyx-slider",
published: {
value: 0,
lockBar: !0,
tappable: !0
},
events: {
onChange: "",
onChanging: "",
onAnimateFinish: ""
},
showStripes: !1,
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
moreComponents: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorComplete"
}, {
classes: "onyx-slider-taparea"
}, {
name: "knob",
classes: "onyx-slider-knob"
} ],
create: function() {
this.inherited(arguments), this.createComponents(this.moreComponents), this.valueChanged();
},
valueChanged: function() {
this.value = this.clampValue(this.min, this.max, this.value);
var a = this.calcPercent(this.value);
this.updateKnobPosition(a), this.lockBar && this.setProgress(this.value);
},
updateKnobPosition: function(a) {
this.$.knob.applyStyle("left", a + "%");
},
calcKnobPosition: function(a) {
var b = a.clientX - this.hasNode().getBoundingClientRect().left;
return b / this.getBounds().width * (this.max - this.min) + this.min;
},
dragstart: function(a, b) {
if (b.horizontal) return b.preventDefault(), this.dragging = !0, !0;
},
drag: function(a, b) {
if (this.dragging) {
var c = this.calcKnobPosition(b);
return this.setValue(c), this.doChanging({
value: this.value
}), !0;
}
},
dragfinish: function(a, b) {
return this.dragging = !1, b.preventTap(), this.doChange({
value: this.value
}), !0;
},
tap: function(a, b) {
if (this.tappable) {
var c = this.calcKnobPosition(b);
return this.tapped = !0, this.animateTo(c), !0;
}
},
animateTo: function(a) {
this.$.animator.play({
startValue: this.value,
endValue: a,
node: this.hasNode()
});
},
animatorStep: function(a) {
return this.setValue(a.value), !0;
},
animatorComplete: function(a) {
return this.tapped && (this.tapped = !1, this.doChange({
value: this.value
})), this.doAnimateFinish(a), !0;
}
});

// Item.js

enyo.kind({
name: "onyx.Item",
classes: "onyx-item",
tapHighlight: !0,
handlers: {
onhold: "hold",
onrelease: "release"
},
hold: function(a, b) {
this.tapHighlight && onyx.Item.addFlyweightClass(this.controlParent || this, "onyx-highlight", b);
},
release: function(a, b) {
this.tapHighlight && onyx.Item.removeFlyweightClass(this.controlParent || this, "onyx-highlight", b);
},
statics: {
addFlyweightClass: function(a, b, c, d) {
var e = c.flyweight;
if (e) {
var f = d != undefined ? d : c.index;
e.performOnRow(f, function() {
a.hasClass(b) ? a.setClassAttribute(a.getClassAttribute()) : a.addClass(b);
}), a.removeClass(b);
}
},
removeFlyweightClass: function(a, b, c, d) {
var e = c.flyweight;
if (e) {
var f = d != undefined ? d : c.index;
e.performOnRow(f, function() {
a.hasClass(b) ? a.removeClass(b) : a.setClassAttribute(a.getClassAttribute());
});
}
}
}
});

// Spinner.js

enyo.kind({
name: "onyx.Spinner",
classes: "onyx-spinner",
stop: function() {
this.setShowing(!1);
},
start: function() {
this.setShowing(!0);
},
toggle: function() {
this.setShowing(!this.getShowing());
}
});

// MoreToolbar.js

enyo.kind({
name: "onyx.MoreToolbar",
classes: "onyx-toolbar onyx-more-toolbar",
menuClass: "",
movedClass: "",
layoutKind: "FittableColumnsLayout",
noStretch: !0,
handlers: {
onHide: "reflow"
},
tools: [ {
name: "client",
fit: !0,
classes: "onyx-toolbar-inline"
}, {
name: "nard",
kind: "onyx.MenuDecorator",
showing: !1,
onActivate: "activated",
components: [ {
kind: "onyx.IconButton",
classes: "onyx-more-button"
}, {
name: "menu",
kind: "onyx.Menu",
classes: "onyx-more-menu",
prepend: !0
} ]
} ],
initComponents: function() {
this.menuClass && this.menuClass.length > 0 && !this.$.menu.hasClass(this.menuClass) && this.$.menu.addClass(this.menuClass), this.createChrome(this.tools), this.inherited(arguments);
},
reflow: function() {
this.inherited(arguments), this.isContentOverflowing() ? (this.$.nard.show(), this.popItem() && this.reflow()) : this.tryPushItem() ? this.reflow() : this.$.menu.children.length || (this.$.nard.hide(), this.$.menu.hide());
},
activated: function(a, b) {
this.addRemoveClass("active", b.originator.active);
},
popItem: function() {
var a = this.findCollapsibleItem();
if (a) {
this.movedClass && this.movedClass.length > 0 && !a.hasClass(this.movedClass) && a.addClass(this.movedClass), this.$.menu.addChild(a);
var b = this.$.menu.hasNode();
return b && a.hasNode() && a.insertNodeInParent(b), !0;
}
},
pushItem: function() {
var a = this.$.menu.children, b = a[0];
if (b) {
this.movedClass && this.movedClass.length > 0 && b.hasClass(this.movedClass) && b.removeClass(this.movedClass), this.$.client.addChild(b);
var c = this.$.client.hasNode();
if (c && b.hasNode()) {
var d = undefined, e;
for (var f = 0; f < this.$.client.children.length; f++) {
var g = this.$.client.children[f];
if (g.toolbarIndex != undefined && g.toolbarIndex != f) {
d = g, e = f;
break;
}
}
if (d && d.hasNode()) {
b.insertNodeInParent(c, d.node);
var h = this.$.client.children.pop();
this.$.client.children.splice(e, 0, h);
} else b.appendNodeToParent(c);
}
return !0;
}
},
tryPushItem: function() {
if (this.pushItem()) {
if (!this.isContentOverflowing()) return !0;
this.popItem();
}
},
isContentOverflowing: function() {
if (this.$.client.hasNode()) {
var a = this.$.client.children, b = a[a.length - 1].hasNode();
if (b) return b.offsetLeft + b.offsetWidth > this.$.client.node.clientWidth;
}
},
findCollapsibleItem: function() {
var a = this.$.client.children;
for (var b = a.length - 1; c = a[b]; b--) {
if (!c.unmoveable) return c;
c.toolbarIndex == undefined && (c.toolbarIndex = b);
}
}
});
